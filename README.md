# 🧑‍💻 My Portfolio – React App with Docker, Nginx, Terraform & CI/CD

> Personal developer portfolio built using modern web technologies. Containerized with Docker, served via Nginx, and infrastructure-ready with Terraform.

---

## 🌐 Live Demo

🚧 *Coming soon* – hosted on AWS EC2 using Terraform & GitHub Actions

---

## ⚙️ Tech Stack

| Frontend     | DevOps / Infra        |
|--------------|------------------------|
| React        | Docker                 |
| TailwindCSS  | Nginx                  |
| JavaScript   | GitHub Actions (CI/CD) |
|              | Terraform (WIP)        |

---

## 🚀 Features

- ✅ Fully responsive React portfolio  
- ✅ Built with Docker multi-stage build  
- ✅ Served via custom-configured Nginx container  
- ✅ `.env` support for API endpoints  
- ✅ `.dockerignore` & `.gitignore` tailored for production  
- ✅ Ready for CI/CD deployment using GitHub Actions  
- ✅ Infrastructure provisioning with Terraform (AWS)

---

## 🐳 Docker

### 🔧 Build the container

```bash
docker build -t my-portfolio -f Docker/Dockerfile .
```

### ▶️ Run the container

```bash
docker run -d -p 80:80 my-portfolio
```

---

## 🧾 Nginx Configuration

Custom `nginx.conf` is used to serve the React build and support client-side routing.  
It is copied into the container during the second stage of the Docker build.

---

## ☁️ Terraform (WIP)

You’ll find a `terraform/` folder with the following modules:

- `provider.tf` – AWS provider config  
- `network.tf` – VPC, Subnets, Route Tables  
- `compute.tf` – EC2 instance config  
- `security.tf` – Security Groups for HTTP/HTTPS  
- `variables.tf` – Customizable inputs  
- `outputs.tf` – Useful output values (e.g., public IP)

### ▶️ Run it:

```bash
cd terraform
terraform init
terraform apply
```

---

## 🧪 CI/CD (WIP)

Plan to automate:

- Docker build & push  
- Terraform plan & apply  
- Deployment to EC2 (via SSH or ECS)

---

## 📁 Folder Structure

```
my-portfolio/
├── Docker/
│   ├── Dockerfile
│   └── Makefile
├── nginx.conf
├── public/
├── src/
├── terraform/
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

---

## 🛡️ Best Practices Followed

- ✅ Multi-stage Docker build  
- ✅ Clean `.dockerignore` to reduce image size  
- ✅ No secrets in repo (`.env*` ignored)  
- ✅ Production-ready Nginx config  
- ✅ GitHub-friendly `.gitignore`  
- ✅ Infrastructure as Code (IaC) with Terraform  
- ✅ Modular folder structure for scalability  

---

## 📌 TODO

- [ ] Deploy to AWS EC2 with Terraform  
- [ ] Add HTTPS with Let's Encrypt  
- [ ] Integrate GitHub Actions CI/CD pipeline  
- [ ] Add backend API or CMS (e.g., Strapi)

---

## 📜 License

MIT License – feel free to use and customize ✌️

---

## 💬 Feedback / Contributions

Feel free to open an issue or submit a PR 💡
