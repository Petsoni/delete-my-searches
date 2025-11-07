import React from 'react';

export default function Popup() {

    const deleteHistory = () => {
        const numberOfHoursAgo = Date.now() - 4 * 60 * 60 * 1000;
        chrome.history.deleteRange({startTime: numberOfHoursAgo, endTime: Date.now()}, () => {
            clearCookies();
        })
    }

    function clearCookies() {
        chrome.cookies.getAll({}, (cookies) => {
            cookies.forEach(cookie => {
                chrome.cookies.remove({url: "https://" + cookie.domain, name: cookie.name});
                closeAllTabs();
            })
        })
    }

    async function closeAllTabs() {
        const allTabs = await chrome.tabs.query({currentWindow: true})
        await chrome.tabs.remove(allTabs.map((tab) => {
            return tab.id!;
        }))
    }

    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 text-center h-full rounded-xl p-3 bg-white shadow-lg">
            <header className="flex flex-col gap-4 font-semibold items-center justify-between h-full text-gray-900">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className={"text-2xl"}>Was I here?</h1>
                    <h4 className="text-gray-500">
                        One button to erase everything
                    </h4>
                </div>
                <button
                    onClick={() => deleteHistory()}
                    className={"bg-red-500 hover:bg-red-700 w-full cursor-pointer text-white font-bold py-5 px-4 rounded-xl"}>
                    Remove me from this browser
                </button>
            </header>
        </div>
    );
}
