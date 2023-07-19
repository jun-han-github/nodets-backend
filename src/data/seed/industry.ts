import IndustryModel from "../../models/industry.js";

export async function seedData() {
    try {
        // await IndustryModel.insertMany(industries);
        console.log('Industry data seeded successfully');
    } catch (error) {
        console.error('Failed to seed data: ', error);
    }
}

const industries = [];