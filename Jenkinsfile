pipeline {
    agent any
    
    stages {
        stage('build') {
            steps {
                script {
                    dockerImage = docker.build("ng-app:${env.BUILD_ID}")
                }
            }
        }
    }
}