export function getItemsUrl(categoryId: number, offset?: number) {
    const params = [{ categoryId }, { offset }];

    const searchParams = new URLSearchParams();
    params.forEach((param) => {
        const [[key, value]] = Object.entries(param);

        if (value || typeof value === 'number') {
            searchParams.append(key, value.toString());
        }
    }, '');

    let url = 'items';
    if (searchParams) url += `?${searchParams.toString()}`;

    return url;
}
