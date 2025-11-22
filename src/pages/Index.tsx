import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Документы', icon: 'FileText', count: '2.5M+', color: 'bg-blue-500' },
    { name: 'Законодательство', icon: 'Scale', count: '850K+', color: 'bg-indigo-500' },
    { name: 'Судебная практика', icon: 'Gavel', count: '1.2M+', color: 'bg-purple-500' },
    { name: 'Комментарии', icon: 'MessageSquare', count: '450K+', color: 'bg-cyan-500' },
    { name: 'Новости', icon: 'Newspaper', count: 'Ежедневно', color: 'bg-emerald-500' },
    { name: 'Консультации', icon: 'Users', count: '24/7', color: 'bg-orange-500' },
  ];

  const recentDocs = [
    { title: 'Федеральный закон от 21.11.2024 N 384-ФЗ', category: 'Законодательство', date: '21.11.2024' },
    { title: 'Постановление Правительства РФ от 18.11.2024 N 1569', category: 'Документы', date: '18.11.2024' },
    { title: 'Определение Конституционного Суда РФ от 19.11.2024', category: 'Судебная практика', date: '19.11.2024' },
    { title: 'Приказ Минфина России от 15.11.2024 N 163н', category: 'Документы', date: '15.11.2024' },
  ];

  const popularTopics = [
    'Налоговый кодекс',
    'Трудовое право',
    'Гражданский кодекс',
    'Арбитражная практика',
    'Корпоративное право',
    'Бухгалтерский учет',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Scale" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-heading font-bold text-primary">КонсультантПлюс</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {['Документы', 'Законодательство', 'Практика', 'Консультации', 'Формы'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <Button variant="outline" size="sm">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-secondary mb-6 animate-fade-in">
            Правовая информация
            <br />
            <span className="text-primary">нового поколения</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in">
            Более 4 миллионов документов, мгновенный поиск и экспертные консультации
          </p>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-3 border">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Icon name="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <Input
                    type="text"
                    placeholder="Найти документ, закон, судебное решение..."
                    className="pl-12 pr-4 py-6 text-lg border-0 focus-visible:ring-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button size="lg" className="px-8 text-base">
                  Найти
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-muted-foreground">Популярные запросы:</span>
            {popularTopics.slice(0, 4).map((topic) => (
              <Badge key={topic} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Разделы базы данных</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={category.name} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon name={category.icon as any} className="text-white" size={24} />
                    </div>
                    <Badge variant="outline">{category.count}</Badge>
                  </div>
                  <CardTitle className="text-xl font-heading">{category.name}</CardTitle>
                  <CardDescription>
                    {category.name === 'Документы' && 'Нормативные акты, письма, инструкции'}
                    {category.name === 'Законодательство' && 'Кодексы, законы, указы'}
                    {category.name === 'Судебная практика' && 'Решения судов всех инстанций'}
                    {category.name === 'Комментарии' && 'Разъяснения экспертов и юристов'}
                    {category.name === 'Новости' && 'Актуальные изменения в праве'}
                    {category.name === 'Консультации' && 'Помощь квалифицированных юристов'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between group">
                    Перейти
                    <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="recent" className="w-full">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-heading font-bold">Актуальное</h2>
              <TabsList>
                <TabsTrigger value="recent">Новые документы</TabsTrigger>
                <TabsTrigger value="popular">Популярное</TabsTrigger>
                <TabsTrigger value="changes">Изменения</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="recent" className="space-y-4">
              {recentDocs.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon name="FileText" size={20} className="text-primary" />
                          <h3 className="font-semibold text-lg hover:text-primary transition-colors">{doc.title}</h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="secondary">{doc.category}</Badge>
                          <span className="flex items-center gap-1">
                            <Icon name="Calendar" size={14} />
                            {doc.date}
                          </span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Icon name="Bookmark" size={18} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="popular">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Популярные документы за последние 7 дней</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="changes">
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">Последние изменения в законодательстве</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">Получите полный доступ</h2>
          <p className="text-xl mb-8 text-white/90">
            Более 4 миллионов документов, экспертные консультации и аналитика в одной системе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white/20 text-white">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">О компании</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Продукты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Для юристов</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для бухгалтеров</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Для бизнеса</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документация</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
              <p className="text-sm text-white/80 mb-2">8 800 555 35 35</p>
              <p className="text-sm text-white/80">support@consultant.ru</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
            <p>© 2024 КонсультантПлюс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
