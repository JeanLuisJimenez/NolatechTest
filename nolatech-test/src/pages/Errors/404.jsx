export default function NotFound() {
    return <div className={"flex items-center justify-center my-auto h-full"}>
        <div className={"w-3/5"}>
            <span className={"text-5xl font-bold"}>404 - Not Found</span>
            <p className={"text-2xl"}>The resource you are looking for does not exists, or is not accessible at the moment</p>
        </div>
    </div>;
}
