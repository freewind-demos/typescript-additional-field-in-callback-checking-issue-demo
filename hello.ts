type User = {
    username: string
}

["aaa", "bbb"].map((it) => ({ username: it, additional: 111 }));
["aaa", "bbb"].map<User>((it) => ({ username: it, additional: 111 }));
["aaa", "bbb"].map((it) => ({ username: it, additional: 111 }) satisfies User);
["aaa", "bbb"].map((it): User => ({ username: it, additional: 111 }));

