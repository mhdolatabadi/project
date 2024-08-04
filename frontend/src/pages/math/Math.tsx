import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export const Math = () => {
  return (
      <div style={{ direction: 'rtl', lineHeight: '1.6', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#f09c42', marginBottom: '20px' }}>
          درس اول: معرفی و ساده کردن عبارات های گویا
        </h1>
        <div style={{ marginBottom: '20px' }}>
          <p>مسئله</p>
          <p>طول مستطیلی ۴ سانتی‌متر از عرض آن بیشتر است. اگر نسبت عرض به طول این مستطیل <InlineMath>{'\\frac{2}{3}'}</InlineMath> باشد، طول و عرض آن را به‌دست آورید.</p>
          <p>اگر <InlineMath>x</InlineMath> را عرض مستطیل درنظر بگیریم، طول آن <InlineMath>x + 4</InlineMath> است و نسبت عرض به طول را می‌توان با <InlineMath>{'\\frac{x}{x + 4}'}</InlineMath> نمایش داد. بنابراین:</p>
          <BlockMath math={'\\frac{x}{x + 4} = \\frac{2}{3}'} />
          <p>به عبارت دیگر:</p>
          <BlockMath math={'3x = 2(x + 4) \\Rightarrow 3x = 2x + 8 \\Rightarrow x = 8'} />
          <p>بنابراین:</p>
          <BlockMath math={'طول = 12، عرض = 8'} />
          <p>عبارت <InlineMath>{'\\frac{x}{x + 4}'}</InlineMath> را، که نسبت دو چندجمله‌ای است، عبارت گویا می‌نامیم:</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <p>به‌طور کلی هر عبارت گویا، کسری است که صورت و مخرج آن چند جمله‌ای باشد.</p>
          <p>از عبارت‌های گویا در ریاضیات، علوم، پزشکی، مهندسی، اقتصاد و بسیاری از زمینه‌های دیگر استفاده می‌شود. به‌طور مثال سرعت متوسط اتومبیلی که مسیری را با سرعت <InlineMath>{'\\frac{70}{v_1}'}</InlineMath> و <InlineMath>{'\\frac{70}{v_2}'}</InlineMath> طی کرده و سپس از همان مسیر با سرعت <InlineMath>{'\\frac{70}{v_1}'}</InlineMath> و <InlineMath>{'\\frac{70}{v_2}'}</InlineMath> بازگشته است، از رابطه زیر به‌دست می‌آید که عبارت گویای جبری است. برخی از مثال‌های دیگر از این قرار است:</p>
          <BlockMath math={'\\frac{y}{k}'} />
          <p>محاسبه جرم یک جسم با سرعت <InlineMath>{'\\frac{k}{v}'}</InlineMath> و انرژی جنبشی <InlineMath>k</InlineMath>:</p>
          <BlockMath math={'\\frac{a + b}{2} = \\text{میانگین حسابی دو عدد} a \\text{و} b'} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <p>با توجه به تعریف بالا عبارات‌های زیر گویا هستند:</p>
          <BlockMath math={'\\frac{x - 5}{5x^3 + x + 1}, \\frac{x + 5}{x - 1}, \\frac{-a}{4}, \\frac{2}{5}, \\frac{x - 7}{4}, \\frac{x}{x^2 - 1}, \\frac{1}{x}, \\frac{10}{x + 2}, \\frac{2x + \\sqrt{x}}{x^2}, \\frac{xy^2}{(x - y)^2}, \\frac{x^3}{y}, \\frac{-a}{b}, x^2 + x - 7'} />
          <p>اما عبارات‌های زیر گویا نیستند (چرا؟):</p>
          <BlockMath math={'\\sqrt{xy}, \\frac{\\sqrt{x}}{x + y}, |x - y|, \\frac{1}{\\sqrt{x - 2}}'} />
        </div>
  
        <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#4caf50', marginBottom: '20px' }}>
          کار در کلاس
        </h2>
        <p>کدامیک از عبارات‌های زیر گویاست؟ چرا؟</p>
        <BlockMath math={'\\frac{v}{x - 1}, \\frac{x + 6}{3}, ah, \\frac{\\sqrt{r} + x}{5}, \\frac{\\sqrt{7x}}{25}, \\frac{|x| + |y|}{x}, \\frac{x \\sqrt{y} + 1}{x^2}, \\frac{x - 5}{\\sqrt{7} + 1}, \\frac{1}{\\sqrt{x}}, \\frac{mn + n^2}{5 - n}, \\frac{2 - a}{y + x}, 14'} />
  
        <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#ff9800', marginBottom: '20px' }}>
          فعالیت
        </h2>
        <p>مقدار عددی عبارت <InlineMath>{'\\frac{x + 5}{x - 3}'}</InlineMath> را به ازای عددهای داده شده در جدول زیر به‌دست آورید:</p>
        <table style={{ width: '100%', border: '1px solid black', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>x</th>
              <th>-2</th>
              <th>7</th>
              <th>1/2</th>
              <th>-1</th>
              <th>-5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><InlineMath>{'\\frac{x + 5}{x - 3}'}</InlineMath></td>
              <td>-1</td>
              <td>-2</td>
              <td>1/2</td>
              <td>-1</td>
              <td>-2</td>
            </tr>
          </tbody>
        </table>
  
        <p>
          به ازای <InlineMath>{'x = 3'}</InlineMath> مخرج عبارت گویای <InlineMath>{'\\frac{x + 5}{x - 3}'}</InlineMath> مساوی صفر می‌شود و همان‌گونه که از قبل می‌دانید، به عنوان عدد تعریف نمی‌شود.
        </p>
        <p>
          برای تعیین همه مقادیری که به‌ازای آنها یک عبارت گویا تعریف می‌شود، باید مقادیری از متغیر را حذف کنیم که به‌ازای آنها مخرج کسر صفر می‌شود. به عبارت دیگر، این مقادیر را نمی‌توان به جای متغیر در عبارت جبری قرار داد و حاصل را محاسبه کرد.
        </p>
        <p>
          مثال: عبارت گویای <InlineMath>{'\\frac{\\sqrt{x^2 + 1}}{(x - 1)(x + 2)}'}</InlineMath> به ازای چه مقادیری از x تعریف نشده است؟
        </p>
        <p>حل: چه مقادیری مخرج کسر را صفر می‌کند؟</p>
        <p>
          برای یافتن این اعداد، مخرج کسر را مساوی صفر قرار می‌دهیم: <InlineMath>{'(x - 1)(x + 2) = 0'}</InlineMath>
        </p>
        <p>
          از طرفی وقتی حاصل ضرب چند عبارت برابر صفر شود، حداقل یکی از آنها صفر است. لذا:
        </p>
        <div style={{ direction: 'rtl', lineHeight: '1.6' }}>
      <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#4caf50', marginBottom: '20px' }}>
        کار در کلاس
      </h2>
      <BlockMath math={'(x - 1) = 0 \\Rightarrow x = 1 \\\\ (x + 2) = 0 \\Rightarrow x = -2'} />
      <p>بنابراین عبارت گویای فوق به ازای <InlineMath>x = 1</InlineMath> و <InlineMath>x = -2</InlineMath> تعریف نشده است.</p>

      <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#4caf50', marginBottom: '20px' }}>
        کار در کلاس
      </h2>
      <p>هر یک از عبارات‌های زیر به ازای چه مقادیری از متغیرها تعریف نشده است؟</p>
      <BlockMath math={'\\frac{4x + 5}{2}, \\frac{v + x}{x}, \\frac{7b + 1}{7b - 1}, \\frac{3x}{x^2 + 4}, \\frac{x}{x - 1}, \\frac{a + 5}{a^2 - 6a + 9}'} />

      <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#ff9800', marginBottom: '20px' }}>
        فعالیت
      </h2>
      <p>مقدار عددی عبارت <InlineMath>{'\\frac{x + 5}{x - 3}'}</InlineMath> را به ازای عددهای داده شده در جدول زیر به‌دست آورید:</p>
      <table style={{ width: '100%', border: '1px solid black', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>x</th>
            <th>-2</th>
            <th>7</th>
            <th>1/2</th>
            <th>-1</th>
            <th>-5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><InlineMath>{'\\frac{x + 5}{x - 3}'}</InlineMath></td>
            <td>-1</td>
            <td>-2</td>
            <td>1/2</td>
            <td>-1</td>
            <td>-2</td>
          </tr>
        </tbody>
      </table>

      <p>به ازای <InlineMath>{'x = 3'}</InlineMath> مخرج عبارت گویای <InlineMath>{'\\frac{x + 5}{x - 3}'}</InlineMath> مساوی صفر می‌شود و همان‌گونه که از قبل می‌دانید، به عنوان عدد تعریف نمی‌شود.</p>
      <p>برای تعیین همه مقادیری که به‌ازای آنها یک عبارت گویا تعریف می‌شود، باید مقادیری از متغیر را حذف کنیم که به‌ازای آنها مخرج کسر صفر می‌شود. به عبارت دیگر، این مقادیر را نمی‌توان به جای متغیر در عبارت جبری قرار داد و حاصل را محاسبه کرد.</p>
      <p>مثال: عبارت گویای <InlineMath>{'\\frac{\\sqrt{x^2 + 1}}{(x - 1)(x + 2)}'}</InlineMath> به ازای چه مقادیری از x تعریف نشده است؟</p>
      <p>حل: چه مقادیری مخرج کسر را صفر می‌کند؟</p>
      <p>برای یافتن این اعداد، مخرج کسر را مساوی صفر قرار می‌دهیم: <InlineMath>{'(x - 1)(x + 2) = 0'}</InlineMath></p>
      <p>از طرفی وقتی حاصل ضرب چند عبارت برابر صفر شود، حداقل یکی از آنها صفر است. لذا:</p>
      <BlockMath math={'(x - 1) = 0 \\Rightarrow x = 1 \\\\ (x + 2) = 0 \\Rightarrow x = -2'} />
      <p>بنابراین عبارت گویای فوق به ازای <InlineMath>x = 1</InlineMath> و <InlineMath>x = -2</InlineMath> تعریف نشده است.</p>

      <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#4caf50', marginBottom: '20px' }}>
        کار در کلاس
      </h2>
      <p>هر یک از عبارات‌های زیر به ازای چه مقادیری از متغیرها تعریف نشده است؟</p>
      <ol>
        <li><InlineMath>{'\\frac{4x + 5}{2}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{v + x}{x}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{7b + 1}{7b - 1}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{3x}{x^2 + 4}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{x}{x - 1}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{a + 5}{a^2 - 6a + 9}'}</InlineMath></li>
      </ol>

      <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#ff9800', marginBottom: '20px' }}>
        فعالیت
      </h2>
      <p>هر یک از عبارات گویای زیر چگونه ساده شده است؟ هر جا لازم است، راه حل را کامل کنید (با استفاده از اتحادها و تجزیه در هر مورد توضیح دهید).</p>
      <ol>
        <li><BlockMath math={'\\frac{18xy^2}{6y^2} = \\frac{3}{1}'} /></li>
        <li><BlockMath math={'\\frac{x^2 + 5x + 6}{x^2 + 5x + x^3} = \\frac{(x + 2)(x + 3)}{x(x + 1)}'} /></li>
        <li><BlockMath math={'\\frac{x + 2}{(x + 1)(x + 1)}'} /></li>
      </ol>
    </div>
    <div style={{ direction: 'rtl', lineHeight: '1.6' }}>
      <h2 style={{ fontSize: '1.3em', fontWeight: 'bold', color: '#e91e63', marginBottom: '20px' }}>
        تمرین
      </h2>
      <p>۱- برای هر عبارت گویای، مقادیری را به‌دست آورید که عبارت به‌ازای آنها تعریف نشده است.</p>
      <ol>
        <li><InlineMath>{'\\frac{5x}{3ab^2}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{2y}{y(y - 6)}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{2P}{P^2 - P - 12}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{2x + 5}{x}'}</InlineMath></li>
        <li><InlineMath>{'\\frac{x - 1}{x + 5}'}</InlineMath></li>
      </ol>
      
      <p>۲- حاصل هر عبارت را به ساده‌ترین صورت بنویسید:</p>
      <ol>
        <li><BlockMath math={'\\frac{3 - x}{x^2 - 6x + 9}'} /></li>
        <li><BlockMath math={'\\frac{x^2 + 4x}{12x + 24}'} /></li>
        <li><BlockMath math={'\\frac{24x^2}{12x^2 - 6x}'} /></li>
        <li><BlockMath math={'\\frac{y^3 - 2y^2 - 3y}{y^2 + y}'} /></li>
        <li><BlockMath math={'\\frac{1 - t^4}{t^4 + t}'} /></li>
        <li><BlockMath math={'\\frac{6a^4b}{4ab^6}'} /></li>
      </ol>
    </div>
    <div style={{ direction: 'rtl', lineHeight: '1.6' }}>
      <p>۳- عبارت‌هایی را که حاصل آنها ۱ یا -۱ است، معلوم کنید.</p>
      <ol>
        <li><BlockMath math={'\\frac{2y + 3}{2y - 3}'} /></li>
        <li><BlockMath math={'\\frac{y - 3}{3 - y}'} /></li>
        <li><BlockMath math={'\\frac{2y + 3}{3 + 2y}'} /></li>
        <li><BlockMath math={'\\frac{2y + 3}{-2y - 3}'} /></li>
      </ol>

      <p>۴- هر یک از عبارت‌های داده شده در سطر اول را به عبارت مساوی آن در سطر دوم وصل کنید.</p>
      <table style={{ width: '100%', border: '1px solid black', textAlign: 'center' }}>
        <tbody>
          <tr>
            <td>۱) <InlineMath math={'\\frac{a - 2}{a + 5}'} /></td>
            <td>۲) <InlineMath math={'\\frac{a + 7}{a + 5}'} /></td>
            <td>۳) <InlineMath math={'\\frac{7 - a}{a + 5}'} /></td>
          </tr>
          <tr>
            <td>۴) <InlineMath math={'\\frac{-a - 2}{-a - 5}'} /></td>
            <td>۵) <InlineMath math={'\\frac{a - 7}{-a - 5}'} /></td>
            <td>۶) <InlineMath math={'\\frac{7 - a}{-a - 5}'} /></td>
          </tr>
        </tbody>
      </table>

      <p>۵- از عبارت‌های زیر، هر کدام را که با عبارت <InlineMath>{'\\frac{z(x + y)}{t}'}</InlineMath> برابر است، مشخص کنید.</p>
      <ol>
        <li><InlineMath math={'\\frac{z}{t(x + y)}'} /></li>
        <li><InlineMath math={'\\frac{zx + y}{t}'} /></li>
        <li><InlineMath math={'\\frac{1}{t}z(x + y)'} /></li>
        <li><InlineMath math={'\\frac{z x + y}{t}'} /></li>
        <li><InlineMath math={'\\frac{zx}{t} + \\frac{zy}{t}'} /></li>
        <li><InlineMath math={'\\frac{zx}{t} + y'} /></li>
      </ol>

      <p>۶- در جای خالی چه عبارتی باید نوشت؟</p>
      <ol>
        <li><InlineMath math={'\\frac{1 - z}{z} = \\frac{1}{z(z + 1)}'} /></li>
        <li><InlineMath math={'\\frac{2x}{x - 3} = \\frac{1}{x - 6}'} /></li>
        <li><InlineMath math={'\\frac{2y + 2}{5} = \\frac{1}{5}'} /></li>
        <li><InlineMath math={'\\frac{(x - 5)(y)}{(x - 7)(x - 5)} = x + 1'} /></li>
      </ol>
    </div>
      </div>
    );
}

