pipeline {
    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Build install') {
            steps {
                bat 'npm install'
            }
        }   
        stage('Lintified'){
            steps{
                //echo 'Linting'
                bat 'npm run lintme'
            }

        }     
        stage('Build Production files') {
                steps {
                    bat 'npm run build'
                }
            }        
        stage('Test') {
            steps {
                bat 'npm run test -- --coverage'
                //echo 'Testing'
            }
        }
        stage('Deploy') {
            steps {
                // bat 'npm install -g serve'
                // bat 'serve -s build'
                // bat 'npm eject'
                echo 'Deploying....'                
            }
        }
        // stage('Eject'){
        //     steps{
        //     }
        // }
    }
}