import { Observable, Subscriber } from 'rxjs';

const fileToBase64 = (file: any): Observable<any> => {
    return new Observable((subscriber: Subscriber<any>) => {
        const filereader = new FileReader();
        filereader.readAsDataURL(file);

        filereader.onload = () => {
            subscriber.next(filereader.result);
            subscriber.complete();
        };
        filereader.onerror = (error) => {
            subscriber.error(error);
            subscriber.complete();
        };
    })
}

export { fileToBase64 };