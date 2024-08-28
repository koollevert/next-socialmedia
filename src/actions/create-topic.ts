'use server';

export async function createTopic(FormData: FormData){
    const name=FormData.get('name');
    const description=FormData.get('description');
    console.log(name, description);
    //revalidate the homepage

}