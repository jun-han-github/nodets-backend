import IndustryModel from "../../models/industry.js";

export async function seedData() {
    try {
        await IndustryModel.insertMany(industries);
        console.log('Industry data seeded successfully');
    } catch (error) {
        console.error('Failed to seed data: ', error);
    }
}

const industries = [
    { tag: 'IND-RI1', name: 'Retail' },
    { tag: 'IND-HP2', name: 'Healthcare and Pharmaceuticals' },
    { tag: 'IND-TI3', name: 'Technology (Information Technology)' },
    { tag: 'IND-FB4', name: 'Finance and Banking' },
    { tag: 'IND-MF5', name: 'Manufacturing' },
    { tag: 'IND-EOG6', name: 'Energy (Oil and Gas, Renewable Energy, etc.)' },
    { tag: 'IND-AM7', name: 'Automotive' },
    { tag: 'IND-FB8', name: 'Food and Beverage' },
    { tag: 'IND-CRE9', name: 'Construction and Real Estate' },
    { tag: 'IND-E10', name: 'Education' },
    { tag: 'IND-T11', name: 'Telecommunications' },
    { tag: 'IND-TL12', name: 'Transportation and Logistics' },
    { tag: 'IND-ME13', name: 'Media and Entertainment' },
    { tag: 'IND-TH14', name: 'Tourism and Hospitality' },
    { tag: 'IND-PS15', name: 'Professional Services (Consulting, Accounting, Legal, etc.)' },
    { tag: 'IND-A16', name: 'Agriculture' },
    { tag: 'IND-AD17', name: 'Aerospace and Defense' },
    { tag: 'IND-M18', name: 'Mining' },
    { tag: 'IND-CA19', name: 'Clothing and Apparel' },
    { tag: 'IND-C20', name: 'Chemicals' },
];
