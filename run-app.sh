#!/bin/bash

if [ $1 == "--dev" ]; then
  echo "Starting EcoFranca web in development environment"

  echo "Removing existing containers"
  docker-compose down

  echo "Building containers"
  docker-compose up -d --build
elif [ $1 == "--prod" ]; then
  echo "Starting EcoFranca web in production environment"

  echo "Removing existing containers"
  docker-compose -f docker-compose.prod.yml down

  echo "Building containers"
  docker-compose -f docker-compose.prod.yml up -d --build
else
  echo "Environment arg (--dev or --prod) are required"

  read -p "Press any key to continue"
fi
