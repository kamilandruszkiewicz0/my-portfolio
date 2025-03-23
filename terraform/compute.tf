# 🔹 Load Balancer
resource "aws_lb" "portfolio_lb" {
  name               = "portfolio-lb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.lb_sg.id]
  subnets            = [for subnet in aws_subnet.public_subnets : subnet.id]
  tags               = { Name = "PortfolioLB" }
}

# 🔹 Auto Scaling Group dla EC2
resource "aws_autoscaling_group" "portfolio_asg" {
  vpc_zone_identifier  = [for subnet in aws_subnet.private_subnets : subnet.id]
  desired_capacity     = 2
  min_size            = 1
  max_size            = 3
  target_group_arns   = [aws_lb_target_group.portfolio_tg.arn]

  launch_template {
    id      = aws_launch_template.portfolio_lt.id
    version = aws_launch_template.portfolio_lt.latest_version
  }
}

# 🔹 Launch Template dla EC2
resource "aws_launch_template" "portfolio_lt" {
  name_prefix   = "portfolio-lt"
  image_id      = "ami-0c55b159cbfafe1f0"
  instance_type = var.instance_type
  key_name      = var.key_name
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
}

# 🔹 Target Group dla Load Balancer
resource "aws_lb_target_group" "portfolio_tg" {
  name     = "portfolio-tg"
  port     = 80
  protocol = "HTTP"
  vpc_id   = aws_vpc.portfolio_vpc.id
}

# 🔹 Listener dla Load Balancer
resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.portfolio_lb.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.portfolio_tg.arn
  }
}