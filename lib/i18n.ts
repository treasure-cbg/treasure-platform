export type Language = "zh" | "en" | "ja" | "ko"

export interface Translations {
  // Navigation
  nav: {
    ranking: string
    discover: string
    creators: string
    pointsMall: string
    profile: string
    designer: string
    business: string
    titles: string
    search: string
    points: string
  }

  // Common
  common: {
    loading: string
    submit: string
    cancel: string
    save: string
    edit: string
    delete: string
    confirm: string
    back: string
    next: string
    previous: string
    more: string
    less: string
    all: string
    hot: string
    new: string
    trending: string
  }

  // Home page
  home: {
    title: string
    subtitle: string
    description: string
    realTimeUpdate: string
    authorityRanking: string
    globalTreasures: string
    weeklyHot: string
    totalCollected: string
    userReviews: string
  }

  // Categories
  categories: {
    all: string
    figures: string
    blindBox: string
    blocks: string
    models: string
    plush: string
    cards: string
  }

  // User titles
  titles: {
    treasureHunter: string
    trendPioneer: string
    connoisseur: string
    toyExpert: string
    originalDesigner: string
    certifiedBusiness: string
  }

  // Profile
  profile: {
    myRanking: string
    myFavorites: string
    myCollection: string
    myRecommendations: string
    editProfile: string
    level: string
    followers: string
    following: string
  }

  // Verification
  verification: {
    designerVerification: string
    businessVerification: string
    realName: string
    idNumber: string
    portfolioLink: string
    experience: string
    introduction: string
    companyName: string
    licenseNumber: string
    contactPerson: string
    position: string
    phone: string
    uploadDocuments: string
    submitApplication: string
    verificationCenter: string
    pending: string
    approved: string
    rejected: string
  }

  // Discover
  discover: {
    publishPost: string
    shareExperience: string
    selectToy: string
    searchToys: string
    publish: string
    like: string
    comment: string
    share: string
    rankingTag: string
  }

  // Points Mall
  pointsMall: {
    title: string
    description: string
    exchange: string
    stock: string
    originalPrice: string
    categories: {
      all: string
      physical: string
      virtual: string
      coupon: string
      props: string
    }
  }
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      ranking: "排行榜",
      discover: "发现",
      creators: "创作者",
      pointsMall: "积分商城",
      profile: "个人中心",
      designer: "设计师入口",
      business: "企业入口",
      titles: "我的称号",
      search: "搜索全球珍宝...",
      points: "积分",
    },
    common: {
      loading: "加载中...",
      submit: "提交",
      cancel: "取消",
      save: "保存",
      edit: "编辑",
      delete: "删除",
      confirm: "确认",
      back: "返回",
      next: "下一步",
      previous: "上一步",
      more: "更多",
      less: "收起",
      all: "全部",
      hot: "热门",
      new: "最新",
      trending: "趋势",
    },
    home: {
      title: "Treasure Chamber",
      subtitle: "全球珍宝猎人",
      description: "发现世界各地最独特的珍宝",
      realTimeUpdate: "实时更新",
      authorityRanking: "权威排名",
      globalTreasures: "全球珍宝",
      weeklyHot: "本周热门",
      totalCollected: "总收录",
      userReviews: "用户评价",
    },
    categories: {
      all: "全部",
      figures: "手办",
      blindBox: "盲盒",
      blocks: "积木",
      models: "模型",
      plush: "毛绒",
      cards: "收藏卡",
    },
    titles: {
      treasureHunter: "珍宝猎人",
      trendPioneer: "潮流先锋",
      connoisseur: "鉴赏大师",
      toyExpert: "潮玩达人",
      originalDesigner: "原创设计师",
      certifiedBusiness: "认证企业",
    },
    profile: {
      myRanking: "我的打榜",
      myFavorites: "我的最爱",
      myCollection: "我的收藏",
      myRecommendations: "我的推荐",
      editProfile: "编辑资料",
      level: "等级",
      followers: "粉丝",
      following: "关注",
    },
    verification: {
      designerVerification: "原创设计师认证",
      businessVerification: "企业认证",
      realName: "真实姓名",
      idNumber: "身份证号码",
      portfolioLink: "作品集链接",
      experience: "设计经验",
      introduction: "个人简介",
      companyName: "企业名称",
      licenseNumber: "营业执照号码",
      contactPerson: "联系人姓名",
      position: "联系人职位",
      phone: "联系电话",
      uploadDocuments: "上传证明文件",
      submitApplication: "提交认证申请",
      verificationCenter: "认证中心",
      pending: "审核中",
      approved: "已通过",
      rejected: "已拒绝",
    },
    discover: {
      publishPost: "发布动态",
      shareExperience: "分享你的潮玩心得，记得加上标签哦！",
      selectToy: "选择要打榜的潮玩",
      searchToys: "搜索潮玩...",
      publish: "发布",
      like: "点赞",
      comment: "评论",
      share: "分享",
      rankingTag: "#我要打榜#",
    },
    pointsMall: {
      title: "积分商城",
      description: "用积分兑换心仪的奖品",
      exchange: "立即兑换",
      stock: "库存",
      originalPrice: "原价",
      categories: {
        all: "全部",
        physical: "实物",
        virtual: "虚拟",
        coupon: "优惠券",
        props: "道具",
      },
    },
  },
  en: {
    nav: {
      ranking: "Rankings",
      discover: "Discover",
      creators: "Creators",
      pointsMall: "Points Mall",
      profile: "Profile",
      designer: "Designer Portal",
      business: "Business Portal",
      titles: "My Titles",
      search: "Search global treasures...",
      points: "Points",
    },
    common: {
      loading: "Loading...",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      confirm: "Confirm",
      back: "Back",
      next: "Next",
      previous: "Previous",
      more: "More",
      less: "Less",
      all: "All",
      hot: "Hot",
      new: "New",
      trending: "Trending",
    },
    home: {
      title: "Treasure Chamber",
      subtitle: "Global Treasure Hunter",
      description: "Unlocking the most unique treasures from around the world",
      realTimeUpdate: "Real-time Updates",
      authorityRanking: "Authority Rankings",
      globalTreasures: "Global Treasures",
      weeklyHot: "Weekly Hot",
      totalCollected: "Total Collected",
      userReviews: "User Reviews",
    },
    categories: {
      all: "All",
      figures: "Figures",
      blindBox: "Blind Box",
      blocks: "Building Blocks",
      models: "Models",
      plush: "Plush",
      cards: "Trading Cards",
    },
    titles: {
      treasureHunter: "Treasure Hunter",
      trendPioneer: "Trend Pioneer",
      connoisseur: "Connoisseur",
      toyExpert: "Toy Expert",
      originalDesigner: "Original Designer",
      certifiedBusiness: "Certified Business",
    },
    profile: {
      myRanking: "My Rankings",
      myFavorites: "My Favorites",
      myCollection: "My Collection",
      myRecommendations: "My Recommendations",
      editProfile: "Edit Profile",
      level: "Level",
      followers: "Followers",
      following: "Following",
    },
    verification: {
      designerVerification: "Designer Verification",
      businessVerification: "Business Verification",
      realName: "Real Name",
      idNumber: "ID Number",
      portfolioLink: "Portfolio Link",
      experience: "Design Experience",
      introduction: "Introduction",
      companyName: "Company Name",
      licenseNumber: "License Number",
      contactPerson: "Contact Person",
      position: "Position",
      phone: "Phone",
      uploadDocuments: "Upload Documents",
      submitApplication: "Submit Application",
      verificationCenter: "Verification Center",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected",
    },
    discover: {
      publishPost: "Publish Post",
      shareExperience: "Share your toy experience, remember to add hashtags!",
      selectToy: "Select toy to rank",
      searchToys: "Search toys...",
      publish: "Publish",
      like: "Like",
      comment: "Comment",
      share: "Share",
      rankingTag: "#WantToRank#",
    },
    pointsMall: {
      title: "Points Mall",
      description: "Exchange points for your favorite rewards",
      exchange: "Exchange Now",
      stock: "Stock",
      originalPrice: "Original Price",
      categories: {
        all: "All",
        physical: "Physical",
        virtual: "Virtual",
        coupon: "Coupon",
        props: "Props",
      },
    },
  },
  ja: {
    nav: {
      ranking: "ランキング",
      discover: "発見",
      creators: "クリエイター",
      pointsMall: "ポイントモール",
      profile: "プロフィール",
      designer: "デザイナー入口",
      business: "企業入口",
      titles: "マイタイトル",
      search: "グローバル宝物を検索...",
      points: "ポイント",
    },
    common: {
      loading: "読み込み中...",
      submit: "送信",
      cancel: "キャンセル",
      save: "保存",
      edit: "編集",
      delete: "削除",
      confirm: "確認",
      back: "戻る",
      next: "次へ",
      previous: "前へ",
      more: "もっと",
      less: "少なく",
      all: "すべて",
      hot: "ホット",
      new: "新着",
      trending: "トレンド",
    },
    home: {
      title: "Treasure Chamber",
      subtitle: "グローバル宝物ハンター",
      description: "世界中の最もユニークな宝物を発見",
      realTimeUpdate: "リアルタイム更新",
      authorityRanking: "権威ランキング",
      globalTreasures: "グローバル宝物",
      weeklyHot: "今週のホット",
      totalCollected: "総収集",
      userReviews: "ユーザーレビュー",
    },
    categories: {
      all: "すべて",
      figures: "フィギュア",
      blindBox: "ブラインドボックス",
      blocks: "ブロック",
      models: "モデル",
      plush: "ぬいぐるみ",
      cards: "トレーディングカード",
    },
    titles: {
      treasureHunter: "宝物ハンター",
      trendPioneer: "トレンドパイオニア",
      connoisseur: "鑑定家",
      toyExpert: "トイエキスパート",
      originalDesigner: "オリジナルデザイナー",
      certifiedBusiness: "認定企業",
    },
    profile: {
      myRanking: "マイランキング",
      myFavorites: "マイお気に入り",
      myCollection: "マイコレクション",
      myRecommendations: "マイ推薦",
      editProfile: "プロフィール編集",
      level: "レベル",
      followers: "フォロワー",
      following: "フォロー中",
    },
    verification: {
      designerVerification: "デザイナー認証",
      businessVerification: "企業認証",
      realName: "実名",
      idNumber: "ID番号",
      portfolioLink: "ポートフォリオリンク",
      experience: "デザイン経験",
      introduction: "自己紹介",
      companyName: "会社名",
      licenseNumber: "ライセンス番号",
      contactPerson: "連絡担当者",
      position: "役職",
      phone: "電話",
      uploadDocuments: "書類アップロード",
      submitApplication: "申請提出",
      verificationCenter: "認証センター",
      pending: "審査中",
      approved: "承認済み",
      rejected: "拒否済み",
    },
    discover: {
      publishPost: "投稿公開",
      shareExperience: "おもちゃの体験をシェアしよう、ハッシュタグを忘れずに！",
      selectToy: "ランキングするおもちゃを選択",
      searchToys: "おもちゃを検索...",
      publish: "公開",
      like: "いいね",
      comment: "コメント",
      share: "シェア",
      rankingTag: "#ランキングしたい#",
    },
    pointsMall: {
      title: "ポイントモール",
      description: "ポイントでお気に入りの報酬と交換",
      exchange: "今すぐ交換",
      stock: "在庫",
      originalPrice: "定価",
      categories: {
        all: "すべて",
        physical: "物理的",
        virtual: "バーチャル",
        coupon: "クーポン",
        props: "アイテム",
      },
    },
  },
  ko: {
    nav: {
      ranking: "랭킹",
      discover: "발견",
      creators: "크리에이터",
      pointsMall: "포인트몰",
      profile: "프로필",
      designer: "디자이너 입구",
      business: "기업 입구",
      titles: "내 타이틀",
      search: "글로벌 보물 검색...",
      points: "포인트",
    },
    common: {
      loading: "로딩 중...",
      submit: "제출",
      cancel: "취소",
      save: "저장",
      edit: "편집",
      delete: "삭제",
      confirm: "확인",
      back: "뒤로",
      next: "다음",
      previous: "이전",
      more: "더보기",
      less: "접기",
      all: "전체",
      hot: "인기",
      new: "신규",
      trending: "트렌딩",
    },
    home: {
      title: "Treasure Chamber",
      subtitle: "글로벌 보물 헌터",
      description: "전 세계에서 가장 독특한 보물을 발견하세요",
      realTimeUpdate: "실시간 업데이트",
      authorityRanking: "권위 랭킹",
      globalTreasures: "글로벌 보물",
      weeklyHot: "주간 인기",
      totalCollected: "총 수집",
      userReviews: "사용자 리뷰",
    },
    categories: {
      all: "전체",
      figures: "피규어",
      blindBox: "블라인드박스",
      blocks: "블록",
      models: "모델",
      plush: "인형",
      cards: "트레이딩카드",
    },
    titles: {
      treasureHunter: "보물 헌터",
      trendPioneer: "트렌드 개척자",
      connoisseur: "감정가",
      toyExpert: "토이 전문가",
      originalDesigner: "오리지널 디자이너",
      certifiedBusiness: "인증 기업",
    },
    profile: {
      myRanking: "내 랭킹",
      myFavorites: "내 즐겨찾기",
      myCollection: "내 컬렉션",
      myRecommendations: "내 추천",
      editProfile: "프로필 편집",
      level: "레벨",
      followers: "팔로워",
      following: "팔로잉",
    },
    verification: {
      designerVerification: "디자이너 인증",
      businessVerification: "기업 인증",
      realName: "실명",
      idNumber: "ID 번호",
      portfolioLink: "포트폴리오 링크",
      experience: "디자인 경험",
      introduction: "소개",
      companyName: "회사명",
      licenseNumber: "라이선스 번호",
      contactPerson: "담당자",
      position: "직책",
      phone: "전화",
      uploadDocuments: "문서 업로드",
      submitApplication: "신청 제출",
      verificationCenter: "인증 센터",
      pending: "대기 중",
      approved: "승인됨",
      rejected: "거부됨",
    },
    discover: {
      publishPost: "게시물 발행",
      shareExperience: "토이 경험을 공유하세요, 해시태그를 잊지 마세요!",
      selectToy: "랭킹할 토이 선택",
      searchToys: "토이 검색...",
      publish: "발행",
      like: "좋아요",
      comment: "댓글",
      share: "공유",
      rankingTag: "#랭킹하고싶어#",
    },
    pointsMall: {
      title: "포인트몰",
      description: "포인트로 원하는 보상과 교환하세요",
      exchange: "지금 교환",
      stock: "재고",
      originalPrice: "정가",
      categories: {
        all: "전체",
        physical: "실물",
        virtual: "가상",
        coupon: "쿠폰",
        props: "아이템",
      },
    },
  },
}

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split(".")
  let value: any = translations[language]

  for (const k of keys) {
    value = value?.[k]
  }

  return value || key
}
