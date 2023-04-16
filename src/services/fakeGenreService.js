export const genres=[
    { _id: "1", name: "All Genres" },
    {_id:"723498572345890", name:"Romantic"},
    {_id:"892734095873459", name:"Sci-Fic"},
    {_id:"923475098234509", name:"Adventure"},
    {_id:"394875092345324", name:"Action"},
    {_id:"984375982340958", name:"Drama"}
]

export function getGenres(){
    return genres.filter(g=>g);
}