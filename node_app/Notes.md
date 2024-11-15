The container is a separate environment form the local machine. we run node on port 3000 inside the container and not ont he local. That's why it doesn't work int he first go.

port mapping: docker run --name <container-name> -p 3000:3000 <image-name>

### Syncing code with bind mounts

-v $(%cd%):/usr/src/app -> inside the local dir:container dir

anonymous volume to leave node_modules in the container while copying the files runtime

caching
