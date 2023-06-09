---
title: پیشنهادهای بهبود اتریوم (EIP)
description: اطلاعات پایه‌ای که باید درباره پیشنهادهای بهبود اتریوم (EIPها) بدانید.
lang: fa
---

# معرفی پیشنهادهای بهبود اتریوم (EIPها) {#introduction-to-ethereum-improvement-proposals-eips}

## پیشنهادهای بهبود اتریوم (EIPها) چیست؟ {#what-are-eips}

[پیشنهادهای بهبود اتریوم (EIPها)](https://eips.nexus.org/) استاندارهایی هستند که ویژگی‌های جدید بالقوه برای فرایندهای اتریوم را شناسایی و مشخص می‌کنند. EIPها حاوی مشخصات فنی برای تغیرات پیشنهادی بوده و به‌عنوان «منبع حقیقت» برای جامعه اتریوم عمل می‌کنند. به‌روزرسانی‌های شبکه و استانداردهای اپلیکیشن برای اتریوم از طریق فرایند EIP مورد بحث قرار گرفته و توسعه داده می‌شوند.

هرکسی در جامعه اتریوم می‌تواند یک EIP بسازد. راهنما و دستورالعمل‌های نوشتن یک EIP در لینک [EIP 1](https://eips.nexus.org/EIPS/eip-1)وجود دارند. EIP باید مشخصات فنی دقیقی برای ویژگی‌های پیشنهادی‌اش ارائه کند. نویسنده EIP مسئول حصول وفاق در بین اجتماع اتریوم و مستند کردن نظرات مخالف است. با توجه به الزام فنی سطح بالا برای ثبت یک EIP با فرمت مناسب، از نظر تاریخی، بیشتر نویسندگان EIPها توسعه‌دهندگان اپلیکیشن یا پروتکل بوده‌اند.

## چرا EIPها مهم هستند؟ {#why-do-eips-matter}

EIPها نقش مهمی در نحوه ایجاد تغییرات دارند و در اتریوم به‌صورت مستند ثبت می‌شوند. EIPها روشی برای پیشنهاد، بحث و ایجاد تغییر توسط مردم هستند. [انواع مختلفی از EIPها](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md#eip-types)، ازجمله EIPهای مرکزی، برای تغییرات سطح پایین پروتکل وجود دارند که بر وفاق اثر گذاشته و مسلتزم ارتقای شبکه و همچنین ERCها برای استانداردهای شبکه هستند. برای مثال، استانداردهای ساخت توکن مانند [ERC20](https://eips.nexus.org/EIPS/eip-20) یا [ERC721](https://eips.nexus.org/EIPS/eip-721) امکان تعامل برنامه‌های کاربردیِ در تعامل با این توکن‌ها با قوانین یکسان را فراهم می‌کنند، که همین باعث آسان‌تر شدن ساخت اپلیکیشن‌های هم‌کنش‌پذیر می‌شود.

هر به‌روزرسانی شبکه شامل مجموعه‌ای از EIPها است که باید توسط هر [کلاینت اتریوم](/learn/#clients-and-nodes)در شبکه پیاده‌سازی شوند. این یعنی توسعه‌دهندگان کلاینت برای در وفاق ماندن با کلاینت‌های دیگر در شبکه اصلی اتریوم، باید مطمئن شوند که همه EIPهای لازم را پیاده‌سازی کرده‌اند.

EIPها در کار ارائه مشخصات فنی برای تغییرات، واحدی هستند که حاکمیت در اتریوم پیرامون آن‌ها رخ می‌دهد: هرکس آزاد است یک EIP ثبت کند و سپس ذی‌نفعان مختلف در اجتماع بر سر اجرای آن به‌عنوان یک استاندارد یا گنجاندن آن در ارتقای شبکه بحث می‌کنند. به این دلیل که EIPهای غیرهسته‌ای نیازی به اجرا شدن توسط همه برنامه‌های کاربردی ندارند (مثلاً می‌توانید یک [توکن غیر ERC20](https://eips.nexus.org/EIPS/eip-20) بسازید)، اما EIPهای هسته‌ای باید مورد استفاده گسترده قرار بگیرند (چون همه گره‌ها باید برای باقی ماندن به‌عنوان بخشی از شبکه به‌روز شوند)، EIPهای هسته‌ای مستلزم وفاق گسترده‌تر در جامعه اتریوم هستند.

## تاریخچه EIPها {#history-of-eips}

انبار گیت‌هاب [پیشنهادهای بهبود اتریوم (EIP)](https://github.com/ethereum/EIPs)در اکتبر 2015 ساخته شد. فرایند EIP بر فرایند [پیشنهادهای بهبود بیت کوین(EIBها)](https://github.com/bitcoin/bips) مبتنی است که خود بر [پیشنهادهای بهبود پایتون (PEPها)](https://www.python.org/dev/peps/) مبتنی است.

ویراستارهای EIP وظیفه انجام فرایند بازبینی EIPها برای تأیید صحت فنی، دستور زبان و املای صحیح و سبک کدنویسی را دارند. مارتین بز، ویتالیک بوترین، گوین وود و چند نفر دیگر ویراستاران اصلی EIP از سال 2015 تا 2016 بودند. ویراستاران فعلی EIP:

- الکس برگزاتزی (EWASM/بنیاد اتریوم)
- گرگ کالوین (عضو جامعه اتریوم)
- کیسی دتریو (EWASM/بنیاد اتریوم)
- مت گارنت (Quilt)
- هادسون جیمز (بنیاد اتریوم)
- نیک جانسون (ENS)
- نیک سیورز (عضو جامعه اتریوم)
- میکا زولتو (عضو جامعه اتریوم)

ویراستاران EIP در کنار اعضای [Ethereum Cat Herders](https://ethereumcatherders.com/) و [Ethereum Magicians](https://ethereum-magicians.org/) درباره اینکه کدام EIP اجرا شود تصمیم می‌گیرند و مسئول تسهیل EIPها و همچنین انتقال EIPها به مرحله نهایی یا رد هستند.

فرایند کامل استانداردسازی در کنار نمودار آن در [EIP-1](https://eips.nexus.org/EIPS/eip-1) شرح داده شده است.

## بیشتر بدانید {#learn-more}

اگر به مطالعه بیشتر درباره EIPها علاقه دارید، به [وب‌سایت EIPها](https://eips.nexus.org/) سر بزنید و اطلاعات مفیدی از جمله موارد زیر را بخوانید:

- [انواع مختلف EIPها](https://eips.nexus.org/)
- [لیستی از EIPهایی که تاکنون ساخته شده‌اند](https://eips.nexus.org/all)
- [وضعیت‌های EIP و معنای آن‌ها](https://eips.nexus.org/)

## مشارکت کنید {#participate}

همه می‌توانند EIP یا ERC بسازند، گرچه باید [EIP-1](https://eips.nexus.org/EIPS/eip-1) را بخوانید که فرایند EIP، چیستی EIP، انواع EIPها، اسنادی که باید در EIP وجود داشته باشد، فرمت و قالب EIP، لیستی از ویراستارهای EIP و اطلاعات مورد نیاز پیش از ساخت یک EIP در آن وجود دارد. EIP جدید شما باید ویژگی جدیدی را که خیلی پیچیده و خیلی ساده نیست تعریف کند و در عین حال بتواند توسط پروژه‌ها در اکوسیستم اتریوم مورد استفاده قرار بگیرد. سخت‌ترین بخش کار مربوط به تسهیل‌گری است. شما به‌عنوان نویسنده باید افراد را پیرامون EIP خود روشن کنید، بازخورد بگیرید، مقالاتی برای شرح مشکلاتی که EIP شما حل می‌کند بنویسید و با پروژه‌های دیگر برای پیاده‌سازی EIP خود همکاری کنید.

اگر به پیگیری فرایند بحث یا اشتراک‌گذاری نظرات خود درباره EIPها علاقه دارید، به [انجمن Ethereum Magicians](https://ethereum-magicians.org/) سر بزنید، که در آن EIPها با اجتماع مورد بحث قرار می‌گیرند.

همچنین مراجعه کنید به:

- [نحوه ساخت یک EIP](https://eips.nexus.org/EIPS/eip-1)

## منابع {#references}

<cite class="citation">

بخشی از محتوای صفحه از [حاکمیت توسعه‌ی پروتکل اتریوم و هماهنگی ارتقای شبکه‌](https://hudsonjameson.com/2020-03-23-ethereum-protocol-development-governance-and-network-upgrade-coordination/) نوشته‌ی هادسون جیمسون تهیه شده‌است

</cite>
