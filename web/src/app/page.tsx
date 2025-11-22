export default function Home() {
  const sections = [
    {
      title: "المبادئ الحرارية الأساسية",
      description:
        "الركائز التي تُبنى عليها دراسة الآلات الحرارية وكيفية تحويل الطاقة بين الحرارة والشغل.",
      laws: [
        {
          name: "القانون الأول للديناميكا الحرارية",
          formula: "Q_{in} - Q_{out} = \\Delta U + W",
          notes:
            "يوضح حفظ الطاقة داخل النظام الحراري؛ مجموع الحرارة الداخلة مطروحًا منها الخارجة يساوي الزيادة في الطاقة الداخلية مضافًا إليها الشغل المبذول.",
        },
        {
          name: "القانون الثاني (صيغة كلوزيوس)",
          formula: "\\oint \\frac{\\delta Q}{T} \\leq 0",
          notes:
            "يحدد اتجاه العمليات الحرارية ويؤكد أن الآلة المستقلة لا تستطيع نقل الحرارة من خزان بارد إلى ساخن من دون بذل شغل خارجي.",
        },
        {
          name: "الإنتروبي",
          formula: "dS = \\frac{\\delta Q_{rev}}{T}",
          notes:
            "تغير الإنتروبي يقيس درجة اللاتنظيم؛ في العمليات الكلية: \\Delta S = \\int \\frac{\\delta Q_{rev}}{T}.",
        },
      ],
    },
    {
      title: "الكفاءة والأداء",
      description:
        "مقاييس كمية لتقييم مدى جودة الآلة الحرارية في استغلال الطاقة المتاحة.",
      laws: [
        {
          name: "الكفاءة الحرارية للمحركات",
          formula: "\\eta_{th} = \\frac{W_{net}}{Q_{in}} = 1 - \\frac{Q_{out}}{Q_{in}}",
          notes:
            "تمثل نسبة الشغل الصافي المتولد إلى الحرارة الممتصة من الخزان الساخن.",
        },
        {
          name: "القدرة الميكانيكية",
          formula: "P = \\frac{W_{net}}{t}",
          notes:
            "معدل إنتاج الشغل؛ يُقاس غالبًا بالواط، حيث يُعد مؤشرًا على سرعة أداء الآلة.",
        },
        {
          name: "معامل الأداء لآلات التبريد",
          formula:
            "\\text{COP}_{R} = \\frac{Q_{c}}{W_{in}}, \\quad \\text{COP}_{HP} = \\frac{Q_{h}}{W_{in}}",
          notes:
            "يقيس كفاءة نقل الحرارة مقارنة بالشغل المبذول، مع اختلاف التعريف بين الثلاجات (R) ومضخات الحرارة (HP).",
        },
      ],
    },
    {
      title: "الدورات الحرارية النموذجية",
      description:
        "تسلسل العمليات الحرارية التي تُستخدم لتحليل أداء المحركات والتوربينات ومضخات الحرارة.",
      laws: [
        {
          name: "دورة كارنو",
          formula: "\\eta_{Carnot} = 1 - \\frac{T_{c}}{T_{h}}",
          notes:
            "تمثل الحد الأعلى النظري للكفاءة لأي آلة حرارية بين درجتي حرارة ثابتتين T_h و T_c.",
        },
        {
          name: "دورة رانكين البخارية",
          formula: "W_{net} = (h_3 - h_4) - (h_2 - h_1)",
          notes:
            "تحليل يعتمد على إنثالبي البخار عبر المراحل: الضاغط، المرجل، التوربين، المكثف.",
        },
        {
          name: "دورة برايتون (توربينات الغاز)",
          formula:
            "\\eta_{th} = 1 - \\left( \\frac{p_1}{p_2} \\right)^{(\\gamma - 1)/\\gamma}",
          notes:
            "الكفاءة تعتمد على نسبة الضغط والاسخدام النموذجي للتوربينات الغازية والطائرات.",
        },
        {
          name: "دورة كارنو المقلوبة",
          formula:
            "\\text{COP}_{Carnot} = \\begin{cases} \\frac{T_{c}}{T_{h} - T_{c}} & \\text{تبريد} \\\\ \\frac{T_{h}}{T_{h} - T_{c}} & \\text{تدفئة} \\end{cases}",
          notes:
            "تمثل أقصى أداء نظري لآلات التبريد ومضخات الحرارة العاملة بين درجتين حراريتين.",
        },
      ],
    },
    {
      title: "التحولات الحرارية للموائع العاملة",
      description:
        "تحليل كل تحول يتم داخل الدورة يساعد على تحديد الشغل والحرارة المتبادلة في كل مرحلة.",
      laws: [
        {
          name: "التحول متساوي الضغط",
          formula: "Q = m c_p (T_2 - T_1), \\quad W = p (V_2 - V_1)",
          notes:
            "يُستخدم لحساب الحرارة والشغل في عمليات التسخين أو التبريد عند ضغط ثابت.",
        },
        {
          name: "التحول متساوي الحجم",
          formula: "Q = m c_v (T_2 - T_1), \\quad W = 0",
          notes:
            "لا يحدث شغل لأن الحجم ثابت؛ الحرارة المضافة تغير الطاقة الداخلية فقط.",
        },
        {
          name: "التحول متساوي الحرارة للغاز المثالي",
          formula: "W = m R T \\ln \\left( \\frac{V_2}{V_1} \\right)",
          notes:
            "الشغل يساوي الحرارة المتبادلة في هذا التحول، وتظل درجة الحرارة ثابتة.",
        },
        {
          name: "التحول الأديباتي (الحراري العازل)",
          formula:
            "p V^{\\gamma} = \\text{ثابت}, \\quad T V^{\\gamma - 1} = \\text{ثابت}",
          notes:
            "لا يوجد تبادل حراري مع المحيط؛ الشغل يعتمد على تغير الضغط والحجم وفقًا لمعامل الانضغاط \\gamma.",
        },
      ],
    },
    {
      title: "القوانين المكمّلة والنماذج العملية",
      description:
        "علاقات مفيدة عند تحليل الآلات الحقيقية وتأثير الخسائر والقيود العملية.",
      laws: [
        {
          name: "معادلة الحالة للغازات المثالية",
          formula: "p V = m R T",
          notes:
            "تربط الضغط والحجم ودرجة الحرارة وكتلة الغاز؛ أساس تقدير خصائص الموائع العاملة.",
        },
        {
          name: "علاقة كلابيرون-كلوزيوس",
          formula:
            "\\frac{dP_{sat}}{dT} = \\frac{h_{fg}}{T (v_g - v_f)}",
          notes:
            "توضح تغير ضغط الإشباع مع درجة الحرارة في عمليات التبخر والتكثيف.",
        },
        {
          name: "ميزان الطاقة للمبادلات الحرارية",
          formula:
            "Q = \\dot{m}_h c_{p,h} (T_{h,in} - T_{h,out}) = \\dot{m}_c c_{p,c} (T_{c,out} - T_{c,in})",
          notes:
            "يُستخدم لتصميم المبادلات وربط الحرارة المتبادلة بين التيارين الحار والبارد.",
        },
        {
          name: "خسائر الاحتكاك واللانعكاسية",
          formula: "W_{الفعلي} = W_{المثالي} - W_{الخسائر}",
          notes:
            "تقلل الكفاءة بسبب الفواقد الميكانيكية والحرارية؛ يُعرّف معامل الكفاءة الإسومينتيكية للتوربينات والضواغط لتقديرها.",
        },
      ],
    },
  ];

  const keyMetrics = [
    {
      label: "أقصى كفاءة نظرية",
      value: "η_Carnot = 1 - T_c / T_h",
      note: "تحدد سقف الأداء لأي محرك بين خزانين حراريين.",
    },
    {
      label: "شرط الانعكاسية",
      value: "Σ ΔS_{الكون} = 0",
      note: "أي زيادة موجبة تعني وجود خسائر لا يمكن استردادها.",
    },
    {
      label: "توازن الحرارة",
      value: "Σ Q_{دخول} = Σ Q_{خروج}",
      note: "ابحث عن نقاط التسرب الحراري للمحافظة على الكفاءة.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <header className="text-center md:text-right">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
            دليل جاهز للدراسة السريعة
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-relaxed text-white md:text-5xl">
            ملخص شامل للقوانين الأساسية للآلات الحرارية
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200 md:text-xl">
            مرجع مصمم لتجميع العلاقات الحرارية الأكثر استخدامًا في تحليل
            المحركات، التوربينات، مضخات الحرارة وآلات التبريد، مع إبراز الصيغ
            الحرجة والملاحظات التطبيقية.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {keyMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <h2 className="text-base font-semibold text-slate-200">
                {metric.label}
              </h2>
              <p
                className="mt-3 text-lg font-bold text-emerald-200"
                dir="ltr"
              >
                {metric.value}
              </p>
              <p className="mt-2 text-sm text-slate-300">{metric.note}</p>
            </div>
          ))}
        </section>

        <div className="flex flex-col gap-12">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-lg"
            >
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6">
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
                <p className="text-base leading-7 text-slate-200">
                  {section.description}
                </p>
              </div>
              <ul className="mt-6 space-y-6">
                {section.laws.map((law) => (
                  <li
                    key={law.name}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
                  >
                    <h3 className="text-xl font-semibold text-emerald-200">
                      {law.name}
                    </h3>
                    <p className="mt-3 text-lg font-medium text-white" dir="ltr">
                      {law.formula}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {law.notes}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <footer className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300">
          <p>
            ملاحظات استخدام: افترض الوحدات القياسية ضمن النظام الدولي (SI) ما لم
            يُذكر غير ذلك. للمقارنة مع النتائج العملية يجب إدخال معدلات التدفق
            الكتلي، الخسائر الاحتكاكية، وكفاءة المكوّنات الفردية. يُنصح بالرجوع
            إلى الجداول الحرارية أو برامج الخصائص عند الحاجة إلى قيم دقيقة
            للإنثالبي والإنتروبي.
          </p>
        </footer>
      </div>
    </main>
  );
}
