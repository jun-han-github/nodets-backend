import TopicModel from "../../models/topic.js";

export async function seedData() {
    try {
        await TopicModel.insertMany(seedTopics);
        console.log('Topics seeded successfully');
    } catch (error) {
        console.error('Failed to seed data: ', error);
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
    }
]