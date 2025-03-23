variable "instance_type" {
  description = "Typ instancji EC2"
  default     = "t2.micro"
}

variable "key_name" {
  description = "Nazwa klucza SSH"
  default     = "my-aws-key"
}

variable "vpc_cidr" {
  description = "CIDR dla VPC"
  default     = "10.0.0.0/16"
}

variable "allowed_ports" {
  description = "Porty do otwarcia w grupie zabezpieczeń"
  type        = list(number)
  default     = [22, 80, 443]
}

variable "your_ip" {
  description = "Twoje publiczne IP dla SSH"
  default     = "109.243.65.171"
}

variable "subnets" {
  description = "Subnety w różnych strefach dostępności"
  type        = map(string)
  default = {
    "eu-central-1a" = "10.0.1.0/24"
    "eu-central-1b" = "10.0.2.0/24"
    "eu-central-1c" = "10.0.3.0/24"
  }
}
