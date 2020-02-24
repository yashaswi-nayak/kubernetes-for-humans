## Kubernetes For Humans - Part 1
---

### Cluster and App Setup 
1. Create a minikube cluster using command

```
$ minikube start -p my-cluster
```

2. Create a backend deployment using [file](./kubernetes-manifests/backend-deployment.yaml) Run the command
    
```
$ kubectl create -f ./backend-deployment.yaml
```
`Note: Run all the kubectl commands within kubernetes-manifests folder`

3. Create a backend service using [file](./kubernetes-manifests/backend-service.yaml) Run the command

```
$ kubectl create -f ./backend-service.yaml
```

4. Verify the service using 
    
```
$ minikube -p my-cluster service list
```

5. Note the link given in TARGET PORT. Replace this link in the [file](./frontend-app/src/environments/environment.prod.ts) for key `backendUrl` 

6. Enter the folder `frontend-app` run commands

```
$ npm run build
$ docker build -t <dockerhub-acc/tagname> .
$ docker push <dockerhub-acc/tagname>
```

7. Once the image is pushed to your dockerhub account, replace the image name in the [file](./kubernetes-manifests/frontend-deployment.yaml)

8. Run the following commands to get the web app up and running

```
$ kubectl create -f ./frontend-deployment.yaml
$ kubectl create -f ./frontend-service.yaml
```

9. Verify the frontend service using command

```
$ minikube -p my-cluster service list
```

10. Open the url for frontend-service in your browser and verify the web app.