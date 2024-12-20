FROM debian:latest

WORKDIR /usr/app

# Install Bun and necessary image processing dependencies
RUN apt-get update && \
    apt-get install -y \
    curl \
    unzip && \
    curl -fsSL https://bun.sh/install | bash && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Ensure Bun is in PATH
ENV PATH="/root/.bun/bin:$PATH"

# Copy configuration files and install dependencies with Bun
COPY tsconfig.json package.json bun.lockb ./
RUN bun install

# Copy the source code
COPY . .

EXPOSE 3000

CMD ["bun", "run", "start"]
