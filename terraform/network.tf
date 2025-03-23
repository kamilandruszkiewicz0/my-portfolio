# 🔹 VPC
resource "aws_vpc" "portfolio_vpc" {
  cidr_blocks          = var.vpc_cidr
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags                 = { Name = "PortfolioVPC" }
}

# 🔹 Internet Gateway
resource "aws_internet_gateway" "portfolio_igw" {
  vpc_id = aws_vpc.portfolio_vpc.id
  tags   = { Name = "PortfolioIGW" }
}

# 🔹 Publiczne subnety
resource "aws_subnet" "public_subnets" {
  for_each                = var.subnets
  vpc_id                  = aws_vpc.portfolio_vpc.id
  cidr_blocks             = each.value
  availability_zone       = each.key
  map_public_ip_on_launch = true
  tags                    = { Name = "PublicSubnet-${each.key}" }
}

# 🔹 NAT Gateway
resource "aws_eip" "nat_eip" {
  domain = "vpc"
}

resource "aws_nat_gateway" "portfolio_nat" {
  allocation_id = aws_eip.nat_eip.id
  subnet_id     = aws_subnet.public_subnets["eu-central-1a"].id
  depends_on    = [aws_internet_gateway.portfolio_igw]
  tags          = { Name = "PortfolioNAT" }
}

# 🔹 Prywatne subnety
resource "aws_subnet" "private_subnets" {
  for_each               = var.subnets
  vpc_id                 = aws_vpc.portfolio_vpc.id
  cidr_block             = cidrsubnet(var.vpc_cidr, 8, index(keys(var.subnets), each.key) + 3)
  availability_zone      = each.key
  tags                   = { Name = "PrivateSubnet-${each.key}" }
}

# 🔹 Tablica routingu dla publicznych subnetów
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.portfolio_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.portfolio_igw.id
  }

  tags = { Name = "PublicRouteTable" }
}

# 🔹 Przypisanie subnetów do tablicy routingu
resource "aws_route_table_association" "public_rta" {
  for_each       = aws_subnet.public_subnets
  subnet_id      = each.value.id
  route_table_id = aws_route_table.public_rt.id
}

# 🔹 Tablica routingu dla prywatnych subnetów
resource "aws_route_table" "private_rt" {
  vpc_id = aws_vpc.portfolio_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_nat_gateway.portfolio_nat.id
  }

  tags = { Name = "PrivateRouteTable" }
}

# 🔹 Przypisanie prywatnych subnetów do NAT Gateway
resource "aws_route_table_association" "private_rta" {
  for_each       = aws_subnet.private_subnets
  subnet_id      = each.value.id
  route_table_id = aws_route_table.private_rt.id
  depends_on     = [aws_internet_gateway.portfolio_igw]
}
