export const seedSAQuestions = [
    {
        topic_tag: 'CC1AWS1SA1',
        question: 'An organization want to share regular updates about their charitable work using static webpages. The pages are expected to generate a large amount of views from around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution. Which action should the solutions architect take to accomplish this?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'Use Amazon CloudFront with the S3 bucket as its origin' },
            { id: 2, answer: false, option: 'Generate presigned URLs for the files' },
            { id: 3, answer: false, option: 'Use cross-Region replication to all Regions' },
            { id: 4, answer: false, option: 'Use the geoproximity feature of Amazon Route 53' },
        ],
    },
    {
        topic_tag: 'CC1AWS1SA1',
        question: 'A company uses an Amazon RDS MySQL database instance to store customer order data. The security team have requested that SSL/TLS encryption in transit must be used for encrypting connections to the database from application servers. The data in the database is currently encrypted at rest using an AWS KMS key. How can a Solutions Architect enable encryption in transit?',
        question_type: 'single',
        options: [
            { id: 1, answer: true, option: 'Download the AWS-provided root certificates. Use the certificates when connecting to the RDS DB instance' },
            { id: 2, answer: false, option: 'Take a snapshot of the RDS instance. Restore the snapshot to a new instance with encryption in transit enabled' },
            { id: 3, answer: false, option: 'Enable encryption in transit using the RDS Management console and obtain a key using AWS KMS' },
            { id: 4, answer: false, option: 'Add a self-signed certificate to the RDS DB instance. Use the certificates in all connections to the RDS DB instance' },
        ]
    },
    // {
    //     topic_tag: 'CC1AWS1SA1',
    //     question: '',
    //     question_type: 'single',
    //     options: [
    //         { id: 1, answer: true, option: '' },
    //         { id: 2, answer: false, option: '' },
    //         { id: 3, answer: false, option: '' },
    //         { id: 4, answer: false, option: '' },
    //     ]
    // },
]
