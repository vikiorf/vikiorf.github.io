pipeline {
  agent any
  stages {
    stage('Build install') {
      steps {
        bat 'npm install'
      }
    }
    stage('Lintified') {
      steps {
        bat 'npm run lintme'
      }
    }    
    stage('Test') {
      steps {
        bat 'npm run test -- --coverage'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
  tools {
    nodejs 'node'
  }
}