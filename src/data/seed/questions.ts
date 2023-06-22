import QuestionModel from "../../models/question.js";

export async function seedData() {
    try {
        await QuestionModel.deleteMany({});
        await QuestionModel.insertMany(seedSAQuestions);
        console.log('Data seeded successfully');
    } catch (error) {
        console.error('Failed to seed data: ', error);
    }
}

const seedSAQuestions = [
    {
        topic_tag: 'CC1AWS1SA1',
        question: 'A social media application is creating new functionality that will convert uploaded images to smaller, thumbnail images. When a user uploads an image through the web interface, the application should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function and store the image in its compressed form in a different S3 bucket.\nThe solution architect must develop a stateless, durable solution to process images automatically upon upload.\n\nWhich combination of actions will meet these requirements? (Select TWO.)',
        question_type: 'multiple',
        options: [
            { id: 1, answer: true, option: 'Create an Amazon SQS queue. Configure an event notification to add a message to the SQS queue when an image is uploaded to the S3 bucket' },
            { id: 2, answer: true, option: 'Configure the Lambda function to use the Amazon SQS queue as the event source. The Lambda function will resize the image and store it in a separate S3 Bucket' },
            { id: 3, answer: false, option: 'Configure the S3 Bucket to be an event source for a Lambda Function. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed' },
            { id: 4, answer: false, option: 'Launch an Amazon EC2 instance to connect to an Amazon SQS queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function' },
            { id: 5, answer: false, option: 'Configure an Amazon EventBridge event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon SNS topic with the application owner\'s email address for further processing' },
        ],
    },
    {
        topic_tag: 'CC1AWS1SA1',
        question: 'A company has multiple Windows workloads which are .NET application servers and Microsoft SQL Server databases running on Amazon EC2 instances with Windows Server 2016. The company requires a shared file system which is highly available, durable and provides high levels of throughput and IOPS. What is the best way to meet this requirement?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server' },    
            { id: 2, answer: false, option: 'Migrate all the data to Amazon S3. Set up IAM authentication for users to access files' },
            { id: 3, answer: false, option: 'Set up an Amazon S3 File Gateway, mount the S3 File Gateway on the existing EC2 instances' },
            { id: 4, answer: false, option: 'Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS' },
        ],
    },
    {
        topic_tag: 'CC1AWS1R53',
        question: 'To delete hosted zones in Route 53, you first have to delete records with NS or SOA for Type.',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'False' },
            { id: 2, asnwer: false, option: 'True' }
        ],
    },
]