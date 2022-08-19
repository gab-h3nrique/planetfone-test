
const UserTbody = ({children}:any) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">id</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">UserName</div>
                            </th>

                            <th className="p-2 whitespace-nowrap">
                                <div className="font-semibold text-left">Email</div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="text-sm divide-y divide-gray-100">
                        {children}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserTbody