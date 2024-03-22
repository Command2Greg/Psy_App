
// import {IAnswer, ICategory, IGrade, IProffesion, IQuestion, CheckedQuestionDragDrop} from "@/app/components/Types";


export type AppDataState = {
    // allProfessions: IProffesion[];
    // profession: IProffesion | null;
    // grades: IGrade[];
    // allCategories: ICategory[];
    // categories: ICategory[];
    // questions: IQuestion[];
    // answers: IAnswer[];
    // currentIdQuestion: string;
    // checkedQuestionDragDrop: CheckedQuestionDragDrop;
    psyhologists: any[];
}

export type StoreState = {
    appData: AppDataState,
}

export type User = {
    id: string,
    articles: string[],
    desc: string,
    favourite: string,
    mail: string,
    name: string,
    photo: string,
    role: string,
    slug: string,
    video: string[]
}
