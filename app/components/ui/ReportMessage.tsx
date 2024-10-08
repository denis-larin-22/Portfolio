interface IProps {
    isSuccess: boolean,
    successMessage: string,
    errorMessage: string
}

export function ReportMessage({ isSuccess, successMessage, errorMessage }: IProps) {
    return (
        <div className={`w-[300px] h-[100px] rounded-lg bg-m-grey-bg fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-50 shadow-2xl flex items-center justify-center border-t-[5px] ${isSuccess ? "border-m-green" : "border-red-600"} text-slate-300`}>
            <span className="text-2xl mr-2">
                {
                    isSuccess ?
                        '✔'
                        :
                        '❌'
                }
            </span>
            {isSuccess ?
                successMessage
                :
                errorMessage
            }
        </div>
    )
}