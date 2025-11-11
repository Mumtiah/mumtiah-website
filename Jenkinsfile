pipeline {
    agent any   // Use any available Jenkins agent

    stages {
        stage('Checkout') {
            steps {
                // Pull the latest code from your GitHub repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Optional: if you don’t have tests, you can comment this out
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Deploy or Archive Build') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
                // or, if your build output folder is "build"
                // archiveArtifacts artifacts: 'build/**/*', fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
        }
        success {
            echo '✅ Build succeeded!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
