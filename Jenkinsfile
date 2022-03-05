pipeline {
    agent any
    
    stages {
        stage('build') {
            dockerImage = docker.build("ng-app:${env.BUILD_ID}")
        }
    }
}