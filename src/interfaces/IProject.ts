interface IProject
{
    id: number,
    name: string,
    type: string,
    leader: string,
    team: string[],
    progress: number,
    icon: string,
}

export default IProject