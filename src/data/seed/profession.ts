import ProfessionModel from "../../models/profession.js";

export async function seedData() {
    try {
        // await ProfessionModel.insertMany(professions);
        console.log('Profession data seeded successfully');
    } catch (error) {
        console.error('Failed to seed data: ', error);
    }
}

const professions = [];