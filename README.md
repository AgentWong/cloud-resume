# Cloud Resume - Front-End

Static HTML/CSS/JS resume hosted on AWS S3 and served via CloudFront. Part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/). Companion infrastructure repo: [cloud-resume-infra](https://github.com/AgentWong/cloud-resume-infra).

## What's Here

- `index.html` - Resume page
- `css/styles.css` - Styling
- `js/visit.js` - Visitor counter (calls the API Gateway counter endpoint)
- `js/scripts.js` - Other page scripts
- `assets/` - Images and favicon

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/syncS3.yml`), which:

1. Authenticates to AWS via GitHub OIDC (no long-lived access keys)
2. Syncs the repo to the S3 bucket with `aws s3 sync --delete`
3. Invalidates the CloudFront cache so changes are live immediately

The OIDC role and S3/CloudFront resources are managed in the infra repo.

## Infrastructure

All AWS resources (S3 buckets, CloudFront distribution, ACM certificate, Route53 records, API Gateway, Lambda, DynamoDB) live in the infra repo as Terraform. See [cloud-resume-infra](https://github.com/AgentWong/cloud-resume-infra) for the full setup.
