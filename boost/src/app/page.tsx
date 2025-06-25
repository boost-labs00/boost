import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function ShadcnSamplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <h1 className="text-xl font-bold">Boost UI</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">shadcn/ui</Badge>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  메뉴
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="사용자" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 space-y-8">
        {/* Hero Section */}
        <section className="text-center py-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            shadcn/ui 컴포넌트 쇼케이스
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            아름답고 접근성이 뛰어난 컴포넌트들을 확인해보세요
          </p>
          
          <div className="flex justify-center gap-4">
            <Button size="lg">시작하기</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">더 알아보기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>shadcn/ui에 대해</DialogTitle>
                  <DialogDescription>
                    shadcn/ui는 Radix UI와 Tailwind CSS를 기반으로 구축된 
                    재사용 가능한 컴포넌트 라이브러리입니다.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-2 mt-4">
                  <Button variant="outline">취소</Button>
                  <Button>확인</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Alert Section */}
        <Alert>
          <AlertTitle>알림!</AlertTitle>
          <AlertDescription>
            이 페이지는 shadcn/ui 컴포넌트들의 데모입니다.
          </AlertDescription>
        </Alert>

        {/* Tabs Section */}
        <Card>
          <CardHeader>
            <CardTitle>탭 컴포넌트</CardTitle>
            <CardDescription>
              다양한 콘텐츠를 탭으로 구성할 수 있습니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">계정</TabsTrigger>
                <TabsTrigger value="settings">설정</TabsTrigger>
                <TabsTrigger value="analytics">분석</TabsTrigger>
              </TabsList>
              
              <TabsContent value="account" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="username">사용자명</Label>
                  <Input id="username" placeholder="사용자명을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="이메일을 입력하세요" />
                </div>
                <Button>계정 업데이트</Button>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>알림 설정</Label>
                    <p className="text-sm text-muted-foreground">
                      이메일 알림을 받으시겠습니까?
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>다크 모드</Label>
                    <p className="text-sm text-muted-foreground">
                      다크 모드를 활성화합니다
                    </p>
                  </div>
                  <Switch />
                </div>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">프로젝트 진행률</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">사용자 참여도</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Progress value={60} className="w-full" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">목표 달성률</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="w-full" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="default">NEW</Badge>
                기능 1
              </CardTitle>
              <CardDescription>
                새로운 기능에 대한 설명입니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                이 카드는 shadcn/ui의 Card 컴포넌트를 보여줍니다.
              </p>
              <Button variant="outline" className="w-full">
                자세히 보기
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">BETA</Badge>
                기능 2
              </CardTitle>
              <CardDescription>
                베타 기능에 대한 설명입니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                다양한 variant를 가진 Badge 컴포넌트를 확인할 수 있습니다.
              </p>
              <Button variant="default" className="w-full">
                사용해보기
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="destructive">HOT</Badge>
                기능 3
              </CardTitle>
              <CardDescription>
                인기 기능에 대한 설명입니다
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Button 컴포넌트의 다양한 스타일을 확인해보세요.
              </p>
              <Button variant="destructive" className="w-full">
                지금 시작
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Form Section */}
        <Card>
          <CardHeader>
            <CardTitle>연락처 폼</CardTitle>
            <CardDescription>
              메시지를 남겨주세요
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">이름</Label>
                <Input id="firstName" placeholder="이름" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">성</Label>
                <Input id="lastName" placeholder="성" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">메시지</Label>
              <textarea 
                id="message"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="메시지를 입력하세요..."
              />
            </div>
            
            <div className="flex gap-2">
              <Button className="flex-1">메시지 보내기</Button>
              <Button variant="outline">초기화</Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Boost UI. shadcn/ui로 제작되었습니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}