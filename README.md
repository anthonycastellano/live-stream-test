Testing live stream - RTMP for ingest and HLS for playback

To run:
- Install Docker and Node.js
- Run `docker-compose up --build`
- When nginx and node containers are running, create an RTMP stream to `rtmp://<ip_addr>:1935/live/test?key=secret`
- Navigate to `http://<ip_addr>:8080` in a web browser to view the stream.
