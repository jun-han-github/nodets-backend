import ProfessionModel from "../../models/profession.js";

export async function seedData() {
    try {
        await ProfessionModel.insertMany(professions);
        console.log('Profession data seeded successfully');
    } catch (error) {
        console.error('Failed to seed data: ', error);
    }
}

const professions = [
    { tag: 'PRO-C1', name: 'Chef' },
    { tag: 'PRO-NE2', name: 'Network Engineer' },
    { tag: 'PRO-FED3', name: 'Frontend Developer' },
    { tag: 'PRO-SP4', name: 'Supply Planner' },
    { tag: 'PRO-ME5', name: 'Marine Engineer' },
    { tag: 'PRO-FE6', name: 'Finance Executive' },
    { tag: 'PRO-EP7', name: 'Event Planner' },
    { tag: 'PRO-PM8', name: 'Project Manager' },
    { tag: 'PRO-SUR9', name: 'Surgeon' },
    { tag: 'PRO-ACC10', name: 'Accountant' },
    { tag: 'PRO-FF11', name: 'Firefighter' },
];

