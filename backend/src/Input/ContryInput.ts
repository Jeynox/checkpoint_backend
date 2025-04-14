import { Contry } from "../entities/contry";
import { Field, InputType } from "type-graphql";

@InputType()
export class ContryInput implements Partial<Contry> {
    
    @Field()
    code: string;

    @Field()
    name: string;

    @Field()
    emoji: string;

    @Field()
    continent: string; 
}