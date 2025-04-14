import { Contry } from "../entities/contry";

export const seedDatabase = async () => {
  const countries = Contry.create([
    { code: "FR", name: "France", emoji: "🇫🇷", continent: "EU" },
    { code: "US", name: "United States", emoji: "🇺🇸", continent: "NA" },
    { code: "JP", name: "Japan", emoji: "🇯🇵", continent: "AS" },
    { code: "BR", name: "Brazil", emoji: "🇧🇷", continent: "SA" }
  ]);

  for (const country of countries) {
    await country.save();
  }

  console.log("✅ Base de données seedée avec succès !");
};