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
            { id: 2, answer: false, option: 'True' }
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'Which Amazon EBS volume types support attachment to multiple Amazon EC2 instances at the same time? (Select TWO.)',
        question_type: 'multiple',
        options: [
            { id: 1, answer: true, option: 'Provisioned IOPS io1 volumes' },
            { id: 2, answer: true, option: 'Provisioned IOPS io2 volumes' },
            { id: 3, answer: false, option: 'General Purpose gp3 volumes' },
            { id: 4, answer: false, option: 'General Purpose gp2 volumes' },
            { id: 5, answer: false, option: 'Throughput Optimized st1 volumes' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'What is the required relationship to attach an Amazon EBS volume to an Amazon EC2 instance?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'The Amazon EC2 instance and the Amazon EBS volume must be in the same AWS Region and in the same Availability Zone.' },
            { id: 2, answer: false, option: 'The Amazon EC2 instance and the Amazon EBS volume must be in the same AWS Region but can be in different Availability Zones.' },
            { id: 3, answer: false, option: 'The Amazon EC2 instance and the Amazon EBS volume must share Transport Layer Security (TLS) certificates.' },
            { id: 4, answer: false, option: 'The Amazon EC2 instance and the Amazon EBS volume must both be encrypted using the same AWS Key Management Service encryption key.' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'Which AWS service is tightly integrated with Amazon EBS and is used to create and store incremental copies of the data stored on your EBS volumes?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'Amazon EBS Snapshots' },
            { id: 2, answer: false, option: 'AWS DataSync' },
            { id: 3, answer: false, option: 'CloudEndure Disaster Recovery' },
            { id: 4, answer: false, option: 'AWS CloudTrail' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'Which AWS service provides statistical data that you can use to view, analyze, and set alarms on the operational behavior of your volumes?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'Amazon CloudWatch' },
            { id: 2, answer: false, option: 'AWS CloudTrail' },
            { id: 3, answer: false, option: 'Amazon Detective' },
            { id: 4, answer: false, option: 'AWS Control Tower' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'What are some of the benefits of using Amazon EBS volumes? (Select THREE.)',
        question_type: 'multiple',
        options: [
            { id: 1, answer: true, option: 'Virtually unlimited scale' },
            { id: 2, answer: true, option: 'Performance for any workload' },
            { id: 3, answer: true, option: 'Cost-effectiveness' },
            { id: 4, answer: false, option: 'Predefine ridged performance' },
            { id: 5, answer: false, option: 'Snapshots stored in Amazon Elastic File System (Amazon EFS)' },
            { id: 6, answer: false, option: 'Extensive configuration process' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'Which AWS tool would you use to estimate the cost of an Amazon EBS volume with configured snapshots before implementation?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'AWS pricing calculator' },
            { id: 2, answer: false, option: 'Amazon Detective' },
            { id: 3, answer: false, option: 'AWS Compute Optimizer' },
            { id: 4, answer: false, option: 'AWS Control Tower' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'Which Amazon EBS volume type can be expanded to 64,000 IOPS and 1,000 MB/s throughput and offers a tiered pricing structure?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'Provisioned IOPS SSD io2 volumes' },
            { id: 2, answer: false, option: 'Provisioned IOPS SSD io1 volumes' },
            { id: 3, answer: false, option: 'Throughput Optimized HDD st1 volumes' },
            { id: 4, answer: false, option: 'General Purpose SSD gp3 volumes' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'Which AWS service monitors configuration and utilization metrics for your Amazon EBS volumes and generates recommendations of which volumes to modify in order to provide the best price-performance trade-off?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'AWS Compute Optimizer' },
            { id: 2, answer: false, option: 'AWS OpsWorks' },
            { id: 3, answer: false, option: 'AWS Control Tower' },
            { id: 4, answer: false, option: 'Amazon Inspector' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'Which Amazon EBS volume type provides a baseline of 3,000 IOPS and 125 MB/s throughput and can scale volume size and performance independently?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'General Purpose SSD gp3 volumes' },
            { id: 2, answer: false, option: 'General Purpose SSD gp2 volumes' },
            { id: 3, answer: false, option: 'Throughput Optimized HDD st1 volumes' },
            { id: 4, answer: false, option: 'Provisioned IOPS SSD io2 volumes' },
        ],
    },
    {
        topic_tag: 'CC1AWS1EBS1',
        question: 'What is the main difference between Amazon EC2 instance stores and Amazon EBS volumes?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'Instance stores are ephemeral (temporary), Amazon EBS volumes are persistent' },
            { id: 2, answer: false, option: 'Instance stores have a higher latency connecting to EC2 instances, Amazon EBS volumes have a lower latency connecting to EC2 instances' },
            { id: 3, answer: false, option: 'Instance stores offer sliding tier performance options, Amazon EBS volumes offer fixed performance tiers' },
            { id: 4, answer: false, option: 'Instance stores are available only in SSD options, Amazon EBS volumes are available in SSD and HDD options' },
        ],
    },
]