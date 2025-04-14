import { ContryInput } from "../Input/ContryInput";
import { Contry } from "../entities/contry";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver(Contry)
class AdResolver {

    @Query(() => [Contry])
    async getAllConties() {
        const countries = await Contry.find();
        return countries.map(({ code, name, emoji }) => ({ code, name, emoji }));
    }

    @Query(() => Contry)
    async getContryByCode(@Arg("code")
        code: string) {
        return await Contry.findOneByOrFail({code: code});
    }

    @Query(() => [Contry])
    async getAllContriesByContinent(@Arg("continent") continent: string) {
        return await Contry.findBy({continent: continent});
    }

    @Mutation(() => Contry)
    async createContry(@Arg("data") data: ContryInput) {
        const contry = Contry.create(data as Contry);
        await contry.save();
        return contry;
    }
}

export default AdResolver;     