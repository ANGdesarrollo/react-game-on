export default function GetItem(arrayRecieved) {
    let is_ok = true;
    return (
        new Promise((res, rej) =>  {
            is_ok ? res(arrayRecieved) : rej('error')
        })
    );
};
