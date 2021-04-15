export default function getRandomColor() {
    const colors = [
        '#c4b5f0',
        '#c6e2ff',
        '#fff2a7',
        '#cbfff8',
        '#ffcbd2',
        '#ffdecb',
        '#ffcbd2',
        '#c6e2ff',
        '#31dcbd',
        '#a18f6d',
        '#a8842e',
        '#7e6f50'
    ];

    const random = Math.floor(Math.random() *13); // 0 ~ 12까지 랜덤숫자
    return colors[random];
}
