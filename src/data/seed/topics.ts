import TopicModel from "../../models/topic.js";

export async function seedData() {
    try {
        await TopicModel.deleteMany({});
        console.log('Topics deleted.');

        await TopicModel.insertMany(seedTopics);
        console.log('Topics seeded successfully');
    } catch (error) {
        console.error('Failed to seed topics data: ', error);
    }
}

// pull all the subtopics along
const seedTopics = [
    {
        domain: "Cloud Computing",
        subject: "Amazon Web Services",
        topic: "AWS Solutions Architecture",
        topic_tag: "CC1AWS1SA1",
        subtopics: [
            {
                subtopic_tag: "CC1AWS1EBS1",
                subtopic: "Elastic Block Store(EBS)",
            },
            {
                subtopic_tag: "CC1AWS1R53",
                subtopic: "Route 53",
            },
        ],
    },
    {
        domain: "Software Engineering",
        subject: "Frontend Development",
        topic: "React",
        topic_tag: "SE1FD1R1",
        subtopics: [
            {
                subtopic_tag: "SE1FD1R1RH1",
                subtopic: "React Hooks",
            },
        ],
    },
    {
        domain: "Software Engineering",
        subject: "Backendend Development",
        topic: "Nodejs",
        topic_tag: "SE1BD1NJ1",
        subtopics: [
            {
                subtopic_tag: "SE1BD1NJ1EJ1",
                subtopic: "Express.js",
            },
        ],
    },
    {
        domain: "Software Engineering",
        subject: "DevOps",
        topic: "Docker",
        topic_tag: "SE1DO1D1",
        subtopics: [
            {
                subtopic_tag: "SE1DO1D1DC1",
                subtopic: "Docker Containers",
            },
            {
                subtopic_tag: "SE1DO1D1DI1",
                subtopic: "Docker Images",
            },
            {
                subtopic_tag: "SE1DO1D1DC2",
                subtopic: "Docker Commands",
            },
        ],
    },
    // {
    //     domain: "",
    //     subject: "",
    //     topic: "",
    //     topic_tag: "",
    //     subtopics: [
    //         {
    //             subtopic_tag: "",
    //             subtopic: "",
    //         },
    //     ],
    // },
]
