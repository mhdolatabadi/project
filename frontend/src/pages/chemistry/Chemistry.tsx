import "./Chemistry.css"

export const Chemistry = () => {
    return (
        <div className="page-container">
            <div className="content">
                <div className="text-content">
                    <h2>موازنه</h2>
                    <p>
                        با توجه به معادله موازنه شده می‌توان نتیجه گرفت که برای موازنه کردن هر معادلهٔ شیمیایی، باید به یک از الکترون‌دهنده‌ها و الکترون‌گیرنده‌ها توجه نمود و نسبت داد تا تعداد اتم‌های هر عنصر در دو سوی معادله برابر شود.
                    </p>
                    <p>
                        بر اساس یک از الکترون‌دهی‌های موازنه (روش مولرسمی) افزود، برای ترکیبی که دارای بیش‌ترین الکترون است، باید از سمت چپ معادلهٔ آن را الکترون‌دهنده‌ها در نظر گرفت و برای ترکیب‌های دیگر مواد مصرف کرد تا تعداد اتم های هر عنصر در دو سوی معادله برابر شود.
                    </p>
                    <p>
                        برای نمونه معادلهٔ نمایی سوختن کامل پروپان به صورت زیر است:
                        <br />
                        <strong>معادلهٔ موازنه شده:</strong>
                        <br />
                        <div dir='ltr' style={{ textAlign: 'center' }}>
                            C<sub>3</sub>H<sub>8</sub>(g) + 5O<sub>2</sub>(g) → 3CO<sub>2</sub>(g) + 4H<sub>2</sub>O(g)
                        </div>
                        <br />
                        برای موازنهٔ H، باید 4 را ضرب H<sub>2</sub>O بدهیم.
                        <br />
                        <strong>معادلهٔ جدید:</strong>
                        <br />
                        <div dir='ltr' style={{ textAlign: 'center' }}>
                            C<sub>3</sub>H<sub>8</sub>(g) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) + H<sub>2</sub>O(g)
                        </div>
                    </p>
                    <p>
                        اینک تعداد اتم‌های کربن و هیدروژن در سمت چپ مشخص شده است. حال اگر به H<sub>2</sub>O ضرب 4 و به CO<sub>2</sub> ضرب 3 بدهید، تعداد اتم‌های H و 3 H در دو طرف برابر می‌شود.
                        <br />
                        <strong>معادلهٔ جدید:</strong>
                        <br />
                        <div dir='ltr' style={{ textAlign: 'center' }}>
                            C<sub>3</sub>H<sub>8</sub>(g) + O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O(g)
                        </div>
                    </p>
                    <p>
                        در پایان، چون تعداد اتم‌های اکسیژن در سمت راست است، تعداد سمت چپ و برابر با ۱ اتم است. اگر به O<sub>2</sub> ضرب 5 بدهید، نتیجه تعداد اتم‌های همه عناصر در دو سوی معادله برابر می‌پوشند.
                        <br />
                        <strong>معادلهٔ موازنه شده:</strong>
                        <br />
                        <div dir='ltr' style={{ textAlign: 'center' }}>
                            C<sub>3</sub>H<sub>8</sub>(g) + 5O<sub>2</sub>(g) → 2CO<sub>2</sub>(g) + H<sub>2</sub>O(g)
                        </div>
                    </p>
                    <p>
                        همان‌طور که مشاهده می‌کنید، هنگام موازنهٔ کردن باید، توازن‌ها را در فرمول شیمیایی واکنش‌دهنده‌ها و فرآورده‌ها تغییر دهد. هم‌چنین توجه به این نکته ضروری است که هر یک از عنصرها در همه معادله، تعداد اتم‌های کوچک‌ترین مقدار طبیعی ممکن باشد.
                    </p>
                    <p>
                        برای نمونه معادلهٔ نمایی سوختن کامل پروپان به صورت زیر است:
                        <br />
                        (معادله موازنه نشده)
                        <br />
                        <div dir='ltr' style={{ textAlign: 'center' }}>
                            H<sub>2</sub>(g) + O<sub>2</sub>(g) → H<sub>2</sub>O(g)
                        </div>
                        <br />
                        در اینجا باید به O<sub>2</sub> ضرب 4 بدهیم.
                        <br />
                        <div dir='ltr' style={{ textAlign: 'center' }}>
                            H<sub>2</sub>(g) + O<sub>2</sub>(g) → H<sub>2</sub>O(g)
                        </div>
                    </p>
                    <p>
                        حال تعداد اتم‌های H برابر 4 است، همان تعداد مشخص شده است. اگر به H<sub>2</sub>O ضرب 4 و به H<sub>2</sub> ضرب 2 بدهید، تعداد اتم‌های هر دو عنصر در دو سوی معادله برابر می‌شود.
                        <br />
                        <strong>معادلهٔ جدید:</strong>
                        <br />
                        <div dir='ltr' style={{ textAlign: 'center' }}>
                        H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(g)
                        </div>
                        <br />
                        در پایان برای اکسیژن در سمت چپ که برابر است، ضریب ضرب می‌دهد تا در عدد 2 ضرب می‌کنیم:
                        <br />

                        <div dir='ltr' style={{ textAlign: 'center' }}>
                        2H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2H<sub>2</sub>O(g)
                        </div>
                        <br />
                        <strong>معادلهٔ موازنه شده:</strong>
                    </p>
                </div>
            </div>
        </div>
    );
};
