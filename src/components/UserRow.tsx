


const UserRow = ({id, name, userName, email}:any) => {
    return (
      <>
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left font-medium text-green-500">{id}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="font-medium text-gray-800">{name}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="font-medium text-gray-800">{userName}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="font-medium text-gray-800">{email}</div>
                </div>
            </td>
        </tr>
      </>
      )
    }

export default UserRow