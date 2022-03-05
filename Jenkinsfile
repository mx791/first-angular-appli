pipeline {
    agent any
    
    stages {
        stage('build') {
            steps {
                dockerImage = docker.build("ng-app:${env.BUILD_ID}")
            }
        }
    }
}