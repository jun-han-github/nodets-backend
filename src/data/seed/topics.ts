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
        name: "AWS Solutions Architecture",
        topic_tag: "CC1AWS1SA1",
        subtopics: [
            {
                subtopic_tag: "CC1AWS1EBS1",
                name: "Elastic Block Store(EBS)",
            },
            {
                subtopic_tag: "CC1AWS1R53",
                name: "Route 53",
            },
        ],
    },
    {
        domain: "Software Engineering",
        subject: "Frontend Development",
        name: "React",
        topic_tag: "SE1FD1R1",
        subtopics: [
            {
                subtopic_tag: "SE1FD1R1UM1",
                name: "useMemo",
            },
            {
                subtopic_tag: "SE1FD1R1UC1",
                name: "useCallback",
            },
        ],
    },
    // {
    //     domain: "",
    //     subject: "",
    //     name: "",
    //     topic_tag: "",
    //     subtopics: [
    //         {
    //             subtopic_tag: "",
    //             name: "",
    //         },
    //     ],
    // },
]
