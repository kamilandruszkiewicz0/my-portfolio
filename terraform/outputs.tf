output "lb_dns_name" {
  description = "Publiczny adres Load Balancera"
  value       = aws_lb.portfolio_lb.dns_name
}
