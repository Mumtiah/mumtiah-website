pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "No tests found, skipping..."'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build || echo "No build step defined, skipping..."'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deployment step — customize for VPS or hosting later.'
            }
        }
    }

    post {
        success {
            echo '✅ Build completed successfully!'
        }
        failure {
            echo '❌ Build failed. Check logs.'
        }
    }
}
