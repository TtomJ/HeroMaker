cd ~/Heromaker

docker run -d -p 80:80 \
  -v $(pwd)/public:/usr/share/nginx/html \
  --name nginx-live nginx:alpine