wordData.push(...[
    { word: "perseverance", meaning: "毅力；坚持不懈", example: "Success comes from perseverance and hard work. 成功来自于坚持和努力。" },
    { word: "diligent", meaning: "勤奋的；用功的", example: "She is a diligent student who always completes her assignments on time. 她是个勤奋的学生，总是按时完成作业。" },
    { word: "comprehensive", meaning: "全面的；综合的", example: "We need a comprehensive plan to solve this problem. 我们需要一个全面的计划来解决这个问题。" },
    { word: "profound", meaning: "深刻的；深奥的", example: "The book had a profound impact on my thinking. 这本书对我的思想产生了深远影响。" },
    { word: "integrity", meaning: "正直；诚实", example: "He is a man of great integrity who always keeps his promises. 他是个非常正直的人，总是信守承诺。" },
    { word: "controversial", meaning: "有争议的", example: "The new policy has become a controversial topic. 这项新政策已成为一个有争议的话题。" },
    { word: "phenomenon", meaning: "现象", example: "Global warming is a concerning phenomenon. 全球变暖是一个令人担忧的现象。" },
    { word: "analytical", meaning: "分析的；解析的", example: "She has excellent analytical skills. 她有出色的分析能力。" },
    { word: "fundamental", meaning: "基本的；根本的", example: "Hard work is fundamental to success. 努力工作是成功的基础。" },
    { word: "hypothesis", meaning: "假设", example: "Scientists tested their hypothesis through experiments. 科学家通过实验验证他们的假设。" },
    { word: "paradox", meaning: "悖论；矛盾", example: "It's a paradox that standing is more tiring than walking. 站着比走路更累是个矛盾的现象。" },
    { word: "simultaneous", meaning: "同时的", example: "The two events happened simultaneous. 这两个事件同时发生。" },
    { word: "theoretical", meaning: "理论的", example: "We need to apply theoretical knowledge to practice. 我们需要把理论知识应用到实践中。" },
    { word: "versatile", meaning: "多才多艺的；多功能的", example: "He is a versatile musician who plays several instruments. 他是个多才多艺的音乐家，会演奏多种乐器。" },
    { word: "ambiguous", meaning: "模棱两可的", example: "Her answer was ambiguous and confusing. 她的回答模棱两可，令人困惑。" },
    { word: "benevolent", meaning: "仁慈的；慈善的", example: "The benevolent old man donated to charity regularly. 这位仁慈的老人定期向慈善机构捐款。" },
    { word: "coherent", meaning: "连贯的；一致的", example: "She presented a coherent argument in her essay. 她在文章中提出了一个连贯的论点。" },
    { word: "deteriorate", meaning: "恶化；退化", example: "The patient's condition began to deteriorate. 病人的病情开始恶化。" },
    { word: "eloquent", meaning: "雄辩的；有说服力的", example: "The speaker gave an eloquent speech. 演讲者发表了一场雄辩的演讲。" },
    { word: "formidable", meaning: "强大的；可怕的", example: "The team faced formidable opponents. 这个团队面对强大的对手。" }
]);

{
    const pronunciationDataLocal = {
        "perseverance": "/ˌpɜːsəˈvɪərəns/",
        "diligent": "/ˈdɪlɪdʒənt/",
        "comprehensive": "/ˌkɒmprɪˈhensɪv/",
        "profound": "/prəˈfaʊnd/",
        "integrity": "/ɪnˈteɡrəti/",
        "controversial": "/ˌkɒntrəˈvɜːʃl/",
        "phenomenon": "/fəˈnɒmɪnən/",
        "analytical": "/ˌænəˈlɪtɪkl/",
        "fundamental": "/ˌfʌndəˈmentl/",
        "hypothesis": "/haɪˈpɒθəsɪs/",
        "paradox": "/ˈpærədɒks/",
        "simultaneous": "/ˌsɪmlˈteɪniəs/",
        "theoretical": "/ˌθɪəˈretɪkl/",
        "versatile": "/ˈvɜːsətaɪl/",
        "ambiguous": "/æmˈbɪɡjuəs/",
        "benevolent": "/bəˈnevələnt/",
        "coherent": "/kəʊˈhɪərənt/",
        "deteriorate": "/dɪˈtɪəriəreɪt/",
        "eloquent": "/ˈeləkwənt/",
        "formidable": "/fəˈmɪdəbl/"
    }
    for (const key in pronunciationDataLocal) {
        pronunciationData[key] = pronunciationDataLocal[key];
    }
}