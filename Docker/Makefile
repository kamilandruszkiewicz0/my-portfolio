build:
	docker build -t my-portfolio -f Docker/Dockerfile .

run:
	docker run -p 80:80 my-portfolio

deploy:
	cd terraform && terraform apply -auto-approve
